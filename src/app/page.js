import HeroSection from "@/components/HeroSection";
import CourseCard from "@/components/CourseCard";
import LearningTip from "@/components/LearningTip";
import Instructor from "@/components/Instructor";

export default async function Home() {
  const res = await fetch(
    "https://skillsphere-ibtesam.vercel.app/courses.json",
    {},
  );
  const courses = await res.json();

  const instruc = await fetch(
    "https://skillsphere-ibtesam.vercel.app/Instructors.json",
    {},
  );
  const instructors = await instruc.json();
  // console.log(instructors)
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

        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-1">
          {topCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        <LearningTip />

        <div>
          <div>
            <p className="mb-8 text-3xl font-bold text-white">
              🏆 Top Instructors Section
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            {instructors.map((instructor) => (
              <Instructor key={instructor.id} instructor={instructor} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
