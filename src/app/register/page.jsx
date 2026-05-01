"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";

import { toast } from "react-toastify";

const Register = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    if (error) {
      toast.error("Register failed!" + " " + error.message);
    }

    if (data) {
      toast.success("Register successFull");
      router.push("/login");
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 py-12 text-white">
      <Card className="w-full max-w-md border border-white/10 bg-white/5 p-8 shadow-2xl shadow-pink-500/10 backdrop-blur-xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black">
            Register<span className="text-pink-500">.</span>
          </h1>
        </div>

        {/* Form */}
        <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
          <TextField isRequired name="name" type="text">
            <Label className="text-gray-300">Name</Label>
            <Input
              placeholder="Enter your name"
              className="border-white/10 bg-black/40 text-white"
            />
            <FieldError />
          </TextField>

          <TextField isRequired name="image" type="text">
            <Label className="text-gray-300">Photo URL</Label>
            <Input
              placeholder="Photo URL"
              className="border-white/10 bg-black/40 text-white"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-gray-300">Email</Label>
            <Input
              placeholder="john@example.com"
              className="border-white/10 bg-black/40 text-white"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8)
                return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value))
                return "Password must contain at least one uppercase letter";
              if (!/[0-9]/.test(value))
                return "Password must contain at least one number";
              return null;
            }}
          >
            <Label className="text-gray-300">Password</Label>
            <Input
              placeholder="Enter your password"
              className="border-white/10 bg-black/40 text-white"
            />
            <Description className="text-xs text-gray-500">
              Must be 8+ characters with 1 uppercase and 1 number.
            </Description>
            <FieldError />
          </TextField>

          {/* Buttons */}
          <div className="mt-2 flex gap-3">
            <Button
              type="submit"
              className="flex-1 bg-linear-to-r from-pink-500 to-violet-600 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.02]"
            >
              <Check />
              Sign Up
            </Button>

            <Button
              type="reset"
              variant="bordered"
              className="border-white/15 text-white"
            >
              Reset
            </Button>
          </div>
        </Form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-pink-400">
            Login
          </Link>
        </p>

        <p className="mt-6 text-center text-sm text-gray-400">Or</p>

        <div className="mt-6">
          <Button
            onClick={handleGoogleSignIn}
            type="button"
            className="group w-full flex items-center justify-center gap-3 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur-xl shadow-lg shadow-black/20 transition-all duration-300 hover:scale-[1.03] hover:border-pink-500/40 hover:bg-white/10 active:scale-[0.98]"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
              <GrGoogle className="text-black text-sm" />
            </div>

            <span className="tracking-wide">Continue with Google</span>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Register;
