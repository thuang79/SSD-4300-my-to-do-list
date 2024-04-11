import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from "react";

export const Route = createFileRoute('/all-lists')({
  component: AllLists,
})

type List = {
  id: string;
  title: string;
};

function AllLists() {
  const [lists, setLists] = useState<List[]>([]);

  useEffect(() => {
    async function getLists() {
      const res = await fetch(import.meta.env.VITE_APP_API_URL + "/lists");
      const data = await res.json();
      setLists(data.lists);
    }
    getLists();
  }, []);

  return (
    <div className="App">
      <div className="card">
        {lists.map((list) => (
          <div key={list.id}>
            <h2>{list.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
