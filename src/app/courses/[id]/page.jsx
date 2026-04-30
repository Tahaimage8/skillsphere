import Image from "next/image";
import { Star, Clock, BookOpen } from "lucide-react";
import Link from "next/link";
import NotFound from "@/app/not-found";

const CourseDetails = async ({ params }) => {
  const res = await fetch(
    "https://skillsphere-ibtesam.vercel.app/courses.json",
  );
  const courses = await res.json();

  const { id } = await params;
  const data = courses.find((course) => course.id == id);

  if (!data) {
 
    NotFound();

}
  return (
    <div className="min-h-screen  bg-black text-white px-5 py-10">
      <div className="mx-auto flex max-w-6xl">
        <div className="relative  w-full mr-10 overflow-hidden rounded-2xl">
          <Image
            src={data.image}
            alt={data.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover rounded-xl transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
          />
        </div>

        <div className="mt-8 space-y-5">
          <h1 className="text-3xl md:text-4xl font-bold">{data.title}</h1>

          <p className="text-gray-400">
            Instructor: <span className="text-white">{data.instructor}</span>
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Clock size={18} />
              {data.duration}
            </div>

            <div className="flex items-center gap-2">
              <BookOpen size={18} />
              {data.level}
            </div>

            <div className="flex items-center gap-2 text-yellow-400">
              <Star size={18} />
              {data.rating}
            </div>
          </div>

          <p className="text-gray-400 leading-7">{data.description}</p>

          <p className="text-sm text-gray-500">
            Category: <span className="text-white">{data.category}</span>
          </p>

          <div className="pt-4">
            <Link href="/register">
              <button className="rounded-full bg-blue-500 px-8 py-3 font-semibold text-white hover:bg-blue-600">
                Enroll Now 🚀
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
