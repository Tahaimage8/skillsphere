import { Spinner } from "@heroui/react";

const CourseDetailsLoading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <Spinner size="lg" color="primary" />
        <p className="mt-4 text-sm text-gray-400">Loading course details...</p>
      </div>
    </div>
  );
};

export default CourseDetailsLoading;