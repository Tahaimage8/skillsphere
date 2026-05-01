import Image from "next/image";
import { notFound } from "next/navigation";
import courses from "../../../../public/courses.json";

const curriculum = [
  "Introduction to the course",
  "Basic concepts and setup",
  "Core lessons and practical examples",
  "Hands-on project practice",
  "Final review and next steps",
];

const CourseDetailsPage = async ({ params }) => {
  const { id } = await params;

  const course = courses.find((item) => item.id === Number(id));

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black px-4 py-12 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
            <Image
              src={course.image}
              alt={course.title}
              width={700}
              height={450}
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-pink-400">
              {course.category}
            </p>

            <h1 className="text-4xl font-black">{course.title}</h1>
            <p className="mt-4 text-gray-300">{course.description}</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-400">Instructor</p>
                <h3 className="font-bold">{course.instructor}</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-400">Duration</p>
                <h3 className="font-bold">{course.duration}</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-400">Rating</p>
                <h3 className="font-bold">⭐ {course.rating}</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-gray-400">Level</p>
                <h3 className="font-bold">{course.level}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-pink-500/10">
          <h2 className="text-2xl font-black">
            Course Curriculum<span className="text-pink-500">.</span>
          </h2>

          <p className="mt-2 text-gray-400">
            Here is a simple overview of what students will learn in this course.
          </p>

          <div className="mt-6 space-y-4">
            {curriculum.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/40 p-4"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 font-bold text-white">
                  {index + 1}
                </div>
                <p className="font-medium text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;