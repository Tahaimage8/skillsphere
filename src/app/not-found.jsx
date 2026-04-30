import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-5 text-white">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-blue-500">404</h1>

        <h2 className="mt-4 text-3xl font-bold">Page Not Found</h2>

        <p className="mt-3 text-gray-400">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link href="/">
          <button className="mt-6 rounded-full bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-600">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;