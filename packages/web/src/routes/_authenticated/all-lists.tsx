import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';


export const Route = createFileRoute('/_authenticated/all-lists')({
  component: HomePage,
})

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
      import.meta.env.VITE_APP_API_URL + "/lists",
      {
        headers: {
          Authorization: token,
        },
      }
    );
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return (await res.json()) as { lists: List[] };
  }
  const { error, data } = useQuery({
    queryKey: ["getAllLists"],
    queryFn: getAllLists,
  });
  return (
    <>
      <h2>To Do List</h2>
      {error ? (
        "An error has occurred: " + error.message
      ) : (
        <ul>
          {data?.lists.map((list) => (
            <li key={list.id}>{list.title}</li>
          ))}
        </ul>
      )}
    </>
  );
}