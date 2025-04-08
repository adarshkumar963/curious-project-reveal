
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-blue-700 sm:text-6xl mb-6">
          Labour Connect
        </h1>
        <p className="text-xl text-blue-600 mb-8">
          Connect job seekers with employers - find the perfect match for your needs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-100">
            <Link to="/register">Create Account</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
