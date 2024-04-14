import { Button } from "../../components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export const Route = createFileRoute("/_authenticated/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  const { logout, user } = useKindeAuth();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-gray-900">Hi {user?.given_name}</h1>
      <div className="text-2xl font-semibold text-gray-800">{user?.email}</div>
      <Button 
        onClick={() => logout()} 
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </Button>
    </div>
  );
}
