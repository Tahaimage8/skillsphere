import CourseCard from "@/components/CourseCard";
import Search from "@/components/Search";
// import { div } from "motion/react-client";
import React from "react";

const CoursesPage = async () => {
  const res = await fetch(
    "https://skillsphere-ibtesam.vercel.app/courses.json"
  );
  const courses = await res.json();

  
  if(!courses){
  return <div className="text-white text-center mt-20">Course not found</div>;
  }
  return (
    <div className="mx-auto max-w-7xl px-5 py-10">
      <div className="mb-8 flex flex-col gap-4 lg:flex-col lg:items-center lg:  md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-bold text-white">All Courses<span className="text-blue-400">.</span></h2>

        
        <Search courses={courses} />

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
