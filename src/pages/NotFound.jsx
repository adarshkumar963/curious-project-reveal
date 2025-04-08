
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-6xl font-bold text-blue-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-blue-600 mb-6">Page Not Found</h2>
      <p className="text-blue-500 mb-8 max-w-md">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button asChild variant="default" className="bg-blue-600 hover:bg-blue-700">
        <Link to="/">Return Home</Link>
      </Button>
    </div>
  );
}
