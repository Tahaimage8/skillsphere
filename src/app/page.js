import HeroSection from "@/components/HeroSection";
import CourseCard from "@/components/CourseCard";

export default async function Home() {
  const res = await fetch("https://skillsphere-ibtesam.vercel.app/courses.json", {
  });
  const courses = await res.json();


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

        <div className="grid gap-6 md:grid-cols-3">
          {topCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>


    </div>
  );
}