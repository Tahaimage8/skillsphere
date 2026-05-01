"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card } from "@heroui/react";
import Link from "next/link";
import UpdateUserModal from "@/components/UpdateUserModal";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const userName = user?.name || "User";
  const userEmail = user?.email || "No email found";
  const userImage = user?.image;

  if (userData.isPending) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <p className="text-gray-400">Loading profile...</p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-5 text-white">
        <Card className="w-full max-w-md border border-white/10 bg-white/5 p-6 text-center">
          <h1 className="text-2xl font-bold">Please Login</h1>

          <p className="mt-3 text-sm text-gray-400">
            You need to login first to view your profile.
          </p>

          <Link href="/login">
            <Button className="mt-5 bg-blue-500 text-white">
              Go to Login
            </Button>
          </Link>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-5 py-12 text-white">
      <section className="mx-auto max-w-3xl">
        <Card className="border border-white/10 bg-white/5 p-6">
          <h1 className="mb-6 text-2xl font-bold">My Profile</h1>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <Avatar>
              <Avatar.Image
                className="h-24 w-24 rounded-full object-cover"
                alt={userName}
                src={userImage}
                referrerPolicy="no-referrer"
              />

              <Avatar.Fallback className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-500 text-3xl font-bold text-white">
                {userName.charAt(0).toUpperCase()}
              </Avatar.Fallback>
            </Avatar>

            <div>
              <h2 className="text-3xl font-semibold">{userName}</h2>
              <p className="mt-1 text-gray-400">{userEmail}</p>

              <p className="mt-3 text-sm text-gray-300">
                Welcome to your SkillSphere account. You can explore courses and
                update your profile information from here.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-white/10 bg-black/30 p-4">
            <p className="text-sm text-gray-400">Account Type</p>
            <h3 className="mt-1 font-medium">Student / Free Account</h3>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/courses">
              <Button className="bg-blue-500 text-white">
                Explore Courses
              </Button>
            </Link>

            <Link href="/">
              <Button variant="bordered" className="border-white/20 text-white">
                Back Home
              </Button>
            </Link>
          </div>

          <div className="mt-6">
            <UpdateUserModal />
          </div>
        </Card>
      </section>
    </main>
  );
};

export default ProfilePage;