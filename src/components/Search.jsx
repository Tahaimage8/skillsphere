"use client";

import { useState } from "react";
import CourseCard from "@/components/CourseCard";

const Search = ({ courses }) => {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="items-center flex flex-col">
      <input
        type="text"
        placeholder="Search courses by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-8 w-60 rounded-2xl border  border-white/10 bg-white/5 px-5 py-3 text-white outline-none placeholder:text-gray-400 focus:border-blue-500"
      />


      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <p className="text-gray-400">No course found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;