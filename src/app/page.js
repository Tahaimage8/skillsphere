import HeroSection from "@/components/HeroSection";
import CourseCard from "@/components/CourseCard";
import LearningTip from "@/components/LearningTip";
import Instructor from "@/components/Instructor";

import courses from "../../public/courses.json";
import instructors from "../../public/Instructors.json";

export default function Home() {
  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div>
      <HeroSection />

      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="mb-8 text-3xl font-bold text-white">🔥 Popular Courses</h2>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
          {topCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <div className="my-5">
          <LearningTip />
        </div>

        <div className="my-5">
          <h2 className="mb-8 text-3xl font-bold text-white">
            🏆 Top Instructors Section
          </h2>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {instructors.map((instructor) => (
              <Instructor key={instructor.id} instructor={instructor} />
            ))}
          </div>
        </div>

        <div className="my-5">
          <h2 className="mb-8 text-3xl font-bold text-white">🔥 Trending Courses</h2>

          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            {topCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}