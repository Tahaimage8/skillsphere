import CourseCard from "@/components/CourseCard";
import Search from "@/components/Search";
import courses from "../../../public/courses.json";

const CoursesPage = () => {
  if (!courses || courses.length === 0) {
    return (
      <div className="mt-20 text-center text-white">
        Course not found
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-10">
      <div className="mb-8 flex gap-4 flex-row items-center md:justify-between">
        <h2 className="text-3xl font-bold text-white">
          All Courses<span className="text-blue-400">.</span>
        </h2>

        <Search courses={courses} />
      </div>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;