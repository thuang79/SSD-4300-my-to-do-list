import { createFileRoute } from '@tanstack/react-router';
import { useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

export const Route = createFileRoute('/_authenticated/create')({
  component: CreatePage,
});

type List = {
  id: string;
  title: string;
};

function CreatePage() {
  const { getToken } = useKindeAuth();
  const navigate = useNavigate({from: "/create"});

  const [title, setTitle] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const token = await getToken();
      if (!token) {
        throw new Error("No token found");
      }
      const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/lists`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          list: { title },
        }),
      });
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      setTitle('');
      navigate({ to: "/all-lists" });
      return await res.json() as { lists: List[] };
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Create List</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id='text-field'
            placeholder="Enter list title"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
