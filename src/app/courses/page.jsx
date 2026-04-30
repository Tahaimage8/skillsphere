import CourseCard from "@/components/CourseCard";
// import { div } from "motion/react-client";
import React from "react";

const CoursesPage = async () => {
  const res = await fetch(
    "https://skillsphere-ibtesam.vercel.app/courses.json"
  );
  const courses = await res.json();
  return (
    <div className="mx-auto max-w-7xl px-5 py-10">
      <div>
        <h2 className="mb-8 text-3xl font-bold text-white">All Courses</h2>
      </div>

      <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-1">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
