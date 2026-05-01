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
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)}>
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-white"
          >
            Skill<span className="text-blue-400">Sphere</span>
          </motion.h1>
        </Link>

        {/* Desktop Menu */}
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

                {/* Simple underline (no layoutId, no heavy animation) */}
                {active && (
                  <span className="absolute -bottom-1 left-0 h-[2px] w-full bg-blue-400" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Auth */}
        {!user ? (
          <div className="hidden md:flex gap-3">
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
          <div className="hidden md:flex items-center gap-3">
            <Avatar>
              <Avatar.Image src={user?.image} />
              <Avatar.Fallback>{userName[0]}</Avatar.Fallback>
            </Avatar>

            <Button size="sm" onClick={handleSignOut}>
              Logout
            </Button>
          </div>
        )}

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black px-5 py-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-gray-300"
              >
                {item.name}
              </Link>
            ))}

            {!user ? (
              <>
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
              </>
            ) : (
              <button onClick={handleSignOut}>Logout</button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;