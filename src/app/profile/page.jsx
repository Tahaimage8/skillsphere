"use client";


import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Card, Chip } from "@heroui/react";
import { motion } from "motion/react";
import { BookOpen, GraduationCap, UserCheck } from "lucide-react";
import Link from "next/link";
import UpdateUserModal from "@/components/UpdateUserModal";


const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const userName = user?.name ;
  const userEmail = user?.email ;
  const userImage = user?.image ;

  if (userData.isPending) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-700 border-t-blue-500" />
          <p className="mt-4 text-gray-400">Loading profile...</p>
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-5 text-white">
        <Card className="w-full max-w-md border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
          <h1 className="text-3xl font-bold">Please Login</h1>

          <p className="mt-3 text-sm text-gray-400">
            You need to login first to view your SkillSphere profile.
          </p>

          <Link href="/login">
            <Button className="mt-6 bg-blue-500 font-semibold text-white hover:bg-blue-600">
              Go to Login
            </Button>
          </Link>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-5 py-16 text-white">
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mx-auto max-w-4xl"
      >
        <Card className="border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl md:p-10">
          <div className="flex flex-col items-center text-center">


             <Avatar>
              <Avatar.Image
                className="relative h-28 w-28 bg-blue-500 text-white ring-4 ring-white/10 object-cover text-4xl font-bold"
                alt={userName}
                src={userImage}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback className="relative flex h-28 w-28 items-center justify-center rounded-full bg-linear-to-r from-pink-500 to-violet-600 text-4xl font-black text-white">
                {userName[0]}
              </Avatar.Fallback>
            </Avatar>

            <Chip className="mt-5 bg-blue-500/10 text-blue-300">
              Active Student Account
            </Chip>

            <h1 className="mt-4 text-4xl font-black">
              {userName}
              <span className="text-blue-500">.</span>
            </h1>

            <p className="mt-2 text-gray-400">{userEmail}</p>

            <div className="mt-8 grid w-full gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <UserCheck className="mx-auto mb-2 text-blue-400" size={24} />
                <p className="text-sm text-gray-400">Account</p>
                <h3 className="mt-1 font-bold text-white">Verified</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <GraduationCap className="mx-auto mb-2 text-blue-400" size={24} />
                <p className="text-sm text-gray-400">Role</p>
                <h3 className="mt-1 font-bold text-white">Student</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <BookOpen className="mx-auto mb-2 text-blue-400" size={24} />
                <p className="text-sm text-gray-400">Plan</p>
                <h3 className="mt-1 font-bold text-white">Free</h3>
              </div>
            </div>

  
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/courses">
                <Button className="bg-blue-500 font-semibold text-white hover:bg-blue-600">
                  Explore Courses
                </Button>
              </Link>

              <Link href="/">
                <Button variant="bordered" className="border-white/15 text-white">
                  Back Home
                </Button>
              </Link>
            </div>

      
            <div className="mt-8">
              <UpdateUserModal/>
            </div>
          </div>
        </Card>

      </motion.section>
    </main>
  );
};

export default ProfilePage;