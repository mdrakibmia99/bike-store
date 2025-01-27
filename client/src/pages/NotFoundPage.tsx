import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center p-8 bg-white shadow-lg rounded-2xl">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>
        <Button 
          className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark" 
          onClick={() => navigate("/")}
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
