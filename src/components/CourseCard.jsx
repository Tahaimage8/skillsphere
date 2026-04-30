import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Card } from "@heroui/react";

const CourseCard = ({ course }) => {
  return (
<Card className="group border rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl hover:scale-[1.02] transition">

      <div className="relative h-48 w-full overflow-hidden rounded-xl">
        <Image
          src={course.image}
          alt={course.title}
       fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-xl transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
        />
      </div>

      <div className="mt-4 space-y-2">

        <h2 className="text-lg font-semibold text-white line-clamp-2">
          {course.title}
        </h2>

        <p className="text-sm text-gray-400">
          Instructor: {course.instructor}
        </p>

        <div className="flex items-center gap-1 text-yellow-400">
          <Star size={16} />
          <span className="text-sm text-white">{course.rating}</span>
        </div>

        <Link href={`/courses/${course.id}`}>
          <button className="mt-3 w-full rounded-full bg-blue-500 py-2 text-sm font-semibold text-white hover:bg-blue-600">
            View Details
          </button>
        </Link>

      </div>
    </div>
</Card>
  );
};

export default CourseCard;