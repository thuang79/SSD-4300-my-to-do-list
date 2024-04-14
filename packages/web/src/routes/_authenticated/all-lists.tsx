import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

export const Route = createFileRoute('/_authenticated/all-lists')({
  component: HomePage,
});

type List = {
  id: string;
  title: string;
  userId: string;
};

function HomePage() {
  const { getToken } = useKindeAuth();
  async function getAllLists() {
    const token = await getToken();
    if (!token) {
      throw new Error("No token found");
    }
    const res = await fetch(
      `${import.meta.env.VITE_APP_API_URL}/lists`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return await res.json() as { lists: List[] };
  }

  const { error, data } = useQuery({
    queryKey: ["getAllLists"],
    queryFn: getAllLists,
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-start pt-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">To Do List</h2>
      {error ? (
        <p className="text-red-500">An error has occurred: {error.message}</p>
      ) : (
        <ul className="list-disc list-inside bg-white rounded-lg p-4 shadow-md max-w-md w-full">
          {data?.lists.map((list) => (
            <li key={list.id} className="border-b last:border-b-0 py-2">
              {list.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
