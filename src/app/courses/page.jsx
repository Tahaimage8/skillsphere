import Search from "@/components/Search";
import courses from "../../../public/courses.json";

const CoursesPage = () => {
  return (
    <div className="mx-auto max-w-7xl px-5 py-10">
      <Search courses={courses} />
    </div>
  );
};

export default CoursesPage;