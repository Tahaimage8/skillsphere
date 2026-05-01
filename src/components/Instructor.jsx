import { Avatar, Card } from "@heroui/react";
import { Star } from "lucide-react";

const Instructor = ({ instructor }) => {
  return (
    // group border rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20
    <Card className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 text-white">
<div className="flex justify-center">
      <Avatar>
        <Avatar.Image alt="John Doe" src={instructor.avatar} />
        <Avatar.Fallback>{instructor.name[0]}</Avatar.Fallback>
      </Avatar>
</div>

      <h3 className="mt-4 text-lg font-semibold">{instructor.name}</h3>
      <p className="text-sm text-gray-400">{instructor.title}</p>

      <p className="mt-2 text-sm text-gray-400">{instructor.experience}</p>
      <p className="text-sm text-gray-400">{instructor.students}</p>

      <div className="mt-3 flex items-center justify-center gap-1 text-yellow-400">
        <Star size={16} />
        <span className="text-sm text-white">{instructor.rating}</span>
      </div>
    </Card>
  );
};

export default Instructor;