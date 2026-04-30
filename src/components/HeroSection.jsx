"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { BookOpen, PlayCircle, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />

      <div className="relative mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2">
        
        {/* Left Content */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 backdrop-blur"
          >
            <Star size={16} className="text-yellow-400" />
            🎓 SkillSphere – Online Learning Platform
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl"
          >
            Upgrade Your Skills Today 🚀
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-7 text-gray-400 md:text-lg"
          >
            A modern online learning platform where users can explore courses,
            watch lessons, and enroll in skill-based programs like Web
            Development, Design, Marketing, and more.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <Link href="/courses">
              <button className="rounded-full bg-blue-500 px-7 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-600">
                Explore Courses
              </button>
            </Link>

            <Link href="/register">
              <button className="rounded-full border border-white/15 px-7 py-3 font-semibold text-white transition hover:bg-white/10">
                Join Now
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Right Banner Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          className="relative"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.5rem] bg-linear-to-br from-blue-500/30 to-purple-500/20 p-6">
              
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">Learn from Industry Experts</h3>
                  <p className="mt-1 text-sm text-gray-300">
                    Build real-world skills with guided lessons.
                  </p>
                </div>

                <div className="rounded-full bg-white/10 p-3">
                  <PlayCircle size={28} />
                </div>
              </div>

              <div className="space-y-4">
                {[
                  "Web Development",
                  "UI/UX Design",
                  "Digital Marketing",
                  "Career Growth",
                ].map((course, index) => (
                  <motion.div
                    key={course}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.15 }}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl bg-blue-500/20 p-2 text-blue-300">
                        <BookOpen size={20} />
                      </div>
                      <span className="font-medium">{course}</span>
                    </div>

                    <span className="text-sm text-gray-400">View</span>
                  </motion.div>
                ))}
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;