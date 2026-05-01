"use client";

import { useState } from "react";
import CourseCard from "@/components/CourseCard";

const Search = ({ courses }) => {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-bold text-white">
          All Courses<span className="text-blue-400">.</span>
        </h2>

        <input
          type="text"
          placeholder="Search courses by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white outline-none placeholder:text-gray-400 focus:border-blue-500"
        />
      </div>

      {/* Cards */}
      {filteredCourses.length > 0 ? (
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400">No course found.</p>
      )}
    </div>
  );
};

export default Search;