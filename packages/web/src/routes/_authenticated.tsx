import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Button } from "../components/ui/button";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export function Login() {
  const { login, register } = useKindeAuth();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-4xl font-bold text-center">Welcome to Your Simple To Do List Tracker</h1>
        <p className="text-xl text-center mt-4">Please login to continue</p>
        <div className="mt-8 flex flex-col gap-y-4">
          <Button onClick={() => login()} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Login</Button>
          <Button onClick={() => register()} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">Register</Button>
        </div>
      </div>
    </div>
  );
}

const Component = () => {
  const { isAuthenticated } = useKindeAuth();
  if (!isAuthenticated) {
    return <Login />;
  }
  return <Outlet />;
};

export const Route = createFileRoute("/_authenticated")({
  component: Component,
});
