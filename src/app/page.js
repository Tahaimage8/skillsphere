import HeroSection from "@/components/HeroSection";
import CourseCard from "@/components/CourseCard";
import LearningTip from "@/components/LearningTip";
import Instructor from "@/components/Instructor";
import { toast } from "react-toastify";

export default async function Home() {
  let courses = [];
  let instructors = [];

  try {
    const res = await fetch(
      "https://skillsphere-ibtesam.vercel.app/courses.json",
      { cache: "no-store" },
    );

    if (res.ok) {
      courses = await res.json();
    }

    const instruc = await fetch(
      "https://skillsphere-ibtesam.vercel.app/Instructors.json",
      { cache: "no-store" },
    );

    if (instruc.ok) {
      instructors = await instruc.json();
    }
  } catch (error) {
    console.error("Data fetch failed:", error);
  }

  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div>
      <HeroSection />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="mb-8 text-3xl font-bold text-white">
          🔥 Popular Courses
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {topCourses.length > 0 ? (
            topCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p className="text-gray-400">No courses found.</p>
          )}
        </div>

        <div className="my-5">
          <LearningTip />
        </div>

        <div className="my-5">
          <h2 className="mb-8 text-3xl font-bold text-white">
            🏆 Top Instructors Section
          </h2>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {instructors.length > 0 ? (
              instructors.map((instructor) => (
                <Instructor key={instructor.id} instructor={instructor} />
              ))
            ) : (
              <p className="text-gray-400">No instructors found.</p>
            )}
          </div>
        </div>

        <div className="my-5">
          
        <h2 className="mb-8 text-3xl font-bold text-white">
          🔥 Trending Courses
        </h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {topCourses.length > 0 ? (
            topCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p className="text-gray-400">No courses found.</p>
          )}
        </div>
        </div>
      </section>
    </div>
  );
}
