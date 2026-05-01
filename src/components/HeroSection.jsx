"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, CheckCircle2, PlayCircle } from "lucide-react";

const topics = [
  "Frontend Development",
  "UI Design Basics",
  "Marketing Skills",
  "Career Preparation",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-[#080B12] text-white">
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-[90px]" />
      <div className="absolute right-0 top-1/2 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-2">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-100"
          >
            <CheckCircle2 size={16} />
            Learn skills step by step
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 }}
            className="mt-6 max-w-2xl text-4xl font-bold leading-tight md:text-6xl"
          >
            Build practical skills with SkillSphere
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-5 max-w-xl text-base leading-7 text-gray-400 md:text-lg"
          >
            Find beginner friendly courses, watch lessons, and improve your
            knowledge through simple learning paths designed for real practice.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 font-medium text-white transition hover:bg-blue-600"
            >
              Browse Courses
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/register"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-medium text-white transition hover:border-blue-400/50 hover:bg-white/5"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.32 }}
          className="relative"
        >
          <div className="rounded-3xl border border-white/10 bg-white/4 p-4 shadow-2xl">
            <div className="rounded-2xl bg-[#101827] p-6">
              <div className="mb-7 flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm text-blue-300">Featured learning</p>
                  <h3 className="mt-2 text-2xl font-semibold">
                    Start learning today
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Choose a topic and continue building your skills.
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-500/15 p-4 text-blue-300">
                  <PlayCircle size={30} />
                </div>
              </div>

              <div className="space-y-3">
                {topics.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 + i * 0.1 }}
                    className="group flex items-center justify-between rounded-2xl border border-white/8 bg-white/3 px-4 py-4 transition hover:border-blue-400/30 hover:bg-blue-500/10"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-xl bg-white/5 p-2 text-blue-300">
                        <BookOpen size={20} />
                      </span>
                      <span className="font-medium text-gray-100">{item}</span>
                    </div>

                    <span className="text-sm text-gray-500 group-hover:text-blue-300">
                      Open
                    </span>
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