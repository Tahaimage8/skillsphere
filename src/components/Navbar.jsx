"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "My Profile", href: "/profile" },
  ];
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const userName = user?.name;

  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl ">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        <Link href="/" onClick={() => setOpen(false)}>
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-wide text-white"
          >
            Skill<span className="text-blue-400">Sphere</span>
          </motion.h1>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link key={item.href} href={item.href} className="relative">
                <span
                  className={`text-sm font-medium transition ${
                    active ? "text-blue-400" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.name}
                </span>

                {active && (
                  <motion.div
                    layoutId="active-line"
                    className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-blue-400"
                  />
                )}
              </Link>
            );
          })}
        </div>

        {!user && (
          <div className="hidden items-center gap-3 md:flex">
            <Link href="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white hover:bg-white/10"
              >
                Login
              </motion.button>
            </Link>

            <Link href="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600"
              >
                Register
              </motion.button>
            </Link>
          </div>
        )}
        {user && (
          <div className="hidden md:flex gap-3 items-center">
            <Avatar>
              <Avatar.Image
                alt="John Doe"
                src={user?.image}
                referrerPolicy="no-referrer"
              />
              <Avatar.Fallback>{userName[0]}</Avatar.Fallback>
            </Avatar>

            <Button onClick={handleSignOut} size="sm" variant="danger">
              Signout
            </Button>
          </div>
        )}

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-white/10 bg-black/90 px-5 py-5 backdrop-blur-xl"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                      active
                        ? "bg-blue-500/15 text-blue-400"
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {!user && (
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <Link href="/login" onClick={() => setOpen(false)}>
                    <button className="w-full rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">
                      Login
                    </button>
                  </Link>

                  <Link href="/register" onClick={() => setOpen(false)}>
                    <button className="w-full rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-600">
                      Register
                    </button>
                  </Link>
                </div>
              )}

              {
            user && <div className="flex gap-3 items-center">
                <Avatar>
        <Avatar.Image alt="John Doe" src={user?.image} 
        referrerPolicy="no-referrer"
        />
        <Avatar.Fallback>{userName[0]}</Avatar.Fallback>
      </Avatar>

          <Button onClick={handleSignOut} size="sm" variant="danger">Signout</Button>
            </div>
          }
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
