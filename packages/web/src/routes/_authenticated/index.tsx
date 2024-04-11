import { useEffect, useState } from "react";
import { createFileRoute } from '@tanstack/react-router';


export const Route = createFileRoute('/_authenticated/')({
  component: HomePage,
})

type List = {
  id: string;
  title: string;
};

function HomePage() {
  const [lists, setLists] = useState<List[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function getLists() {
      const res = await fetch(import.meta.env.VITE_APP_API_URL + "/lists");
      const data = await res.json();  
      setLists(data.lists);
    }
    getLists();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(
      import.meta.env.VITE_APP_API_URL + "/lists", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
        list: {
          title,
        },
      }),
    });
    const data = await res.json();
    setLists(data.lists);
    setTitle("");
  };

  return (
    <div className="App">
      <div className="card">
        {lists.map((list) => (
          <div key={list.id}>
            <h2>{list.title}</h2>
          </div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit}>
  <h2>Add To Do List</h2>
  <input
    type="text"
    name="title"
    placeholder="Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />
  <button type="submit">Add</button>
</form> 

    </div>
  );
}
