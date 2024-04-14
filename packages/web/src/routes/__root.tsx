import { Outlet, Link } from "@tanstack/react-router";
import { type QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext } from "@tanstack/react-router";
import { NotFound } from "../components/not-found";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootLayout,
  notFoundComponent: NotFound,
});

function RootLayout() {
  const { isAuthenticated } = useKindeAuth();
  return (
    <>
      <div className="bg-blue-400 text-white p-5 flex justify-between items-center">
        <Link to="/" className="font-semibold text-xl hover:text-gray-300">
          Home
        </Link>
        <div className="flex gap-4">
          <Link to="/all-lists" className="hover:text-gray-300">
            All Lists
          </Link>
          <Link to="/create" className="hover:text-gray-300">
            New List
          </Link>
          {isAuthenticated && (
            <Link to="/profile" className="hover:text-gray-300">
              Profile
            </Link>
          )}
        </div>
      </div>
      <hr className="my-2 border-gray-700" />
      <div className="p-6">
        <Outlet />
      </div>
    </>
  );
}
