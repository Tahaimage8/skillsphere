"use client";

import { authClient } from "@/lib/auth-client";
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
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

const LoginPage = () => {
  
  const searchParams = useSearchParams();
  const callbackURL = searchParams.get("callbackURL") || "/";

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL, 
    });

    if (error) {
      toast.error("Login failed! " + error.message);
      return;
    }

    if (data) {
      console.log("✅ Login successful!");
      toast.success(`🎉 Welcome back! Let's learn something new.`);
      e.target.reset();
    }
  };

  
  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL,
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-4 py-12 text-white">
      <Card className="w-full max-w-md border border-white/10 bg-white/5 p-8 shadow-2xl shadow-pink-500/10 backdrop-blur-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-black">
            Welcome Back<span className="text-pink-500">.</span>
          </h1>
        </div>

        <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
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

          <TextField isRequired name="password" type="password">
            <Label className="text-gray-300">Password</Label>
            <Input
              placeholder="Enter your password"
              className="border-white/10 bg-black/40 text-white"
            />
            <Description className="text-xs text-gray-500">
              Use your registered account password.
            </Description>
            <FieldError />
          </TextField>

          <Button
            type="submit"
            className="mt-2 w-full bg-linear-to-r from-pink-500 to-violet-600 font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:scale-[1.02]"
          >
            Sign In
          </Button>
        </Form>

        <p className="mt-6 text-center text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-semibold text-pink-400">
            Sign Up
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

export default LoginPage;