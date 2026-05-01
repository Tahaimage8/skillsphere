"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Profile", href: "/profile" },
  ];

  const userData = authClient.useSession();
  const user = userData.data?.user;
  const userName = user?.name || "U";

  const handleSignOut = async () => {
    await authClient.signOut();
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" onClick={() => setOpen(false)}>
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-white"
          >
            Skill<span className="text-blue-400">Sphere</span>
          </motion.h1>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link key={item.href} href={item.href} className="relative">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className={`text-sm ${
                    active ? "text-blue-400" : "text-gray-300"
                  }`}
                >
                  {item.name}
                </motion.span>

                {active && (
                  <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-blue-400" />
                )}
              </Link>
            );
          })}
        </div>

        {!user ? (
          <div className="hidden gap-3 md:flex">
            <Link href="/login">
              <Button size="sm">Login</Button>
            </Link>

            <Link href="/register">
              <Button size="sm" className="bg-blue-500 text-white">
                Register
              </Button>
            </Link>
          </div>
        ) : (
          <div className="hidden items-center gap-3 md:flex">
            <Avatar>
              <Avatar.Image src={user?.image} referrerPolicy="no-referrer" />
              <Avatar.Fallback>{userName[0]}</Avatar.Fallback>
            </Avatar>

            <Button size="sm" onClick={handleSignOut}>
              Logout
            </Button>
          </div>
        )}

        <button onClick={() => setOpen(!open)} className="text-white md:hidden">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-black px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={active ? "text-blue-400" : "text-gray-300"}
                >
                  {item.name}
                </Link>
              );
            })}

            {!user ? (
              <div className="flex gap-3 pt-2">
                <Link href="/login" onClick={() => setOpen(false)}>
                  <Button size="sm">Login</Button>
                </Link>

                <Link href="/register" onClick={() => setOpen(false)}>
                  <Button size="sm" className="bg-blue-500 text-white">
                    Register
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-3 pt-2">
                <Avatar>
                  <Avatar.Image
                    src={user?.image}
                    referrerPolicy="no-referrer"
                  />
                  <Avatar.Fallback>{userName[0]}</Avatar.Fallback>
                </Avatar>

                <Button size="sm" onClick={handleSignOut}>
                  Logout
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;