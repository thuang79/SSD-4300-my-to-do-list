import { useEffect, useState } from "react";
import { createFileRoute } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';


export const Route = createFileRoute('/_authenticated/all-lists')({
  component: HomePage,
})

type List = {
  id: string;
  title: string;
  userId: string;
};

function HomePage() {
  const [lists, setLists] = useState<List[]>([]);
  // const [title, setTitle] = useState("");

  useEffect(() => {
    fetchLists();
  }, []);
  const fetchLists = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_APP_API_URL}/lists`);
      if (!res.ok) {
        throw new Error('Failed to fetch lists');
      }
      const data = await res.json();
      setLists(data.lists);
    } catch (error) {
      console.error('Error fetching lists:', error);
    }
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const res = await fetch(
  //     import.meta.env.VITE_APP_API_URL + "/lists", 
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       list: {
  //         title,
  //       },
  //     }),
  //   });
  //   const data = await res.json();
  //   setLists(data.lists);
  //   setTitle("");
  // };

  return (
<div className="card">
        {lists.map((list) => (
          <div key={list.id}>
            <p>{list.title}</p>
            <p>User ID: {list.userId}</p>
            {/* <p>Created At: {new Date(todo.createdAt).toLocaleString()}</p> Format date */}
          </div>
        ))}
      </div>
      
  );
}

//        <form onSubmit={handleSubmit}>
//   <h2>Add To Do List</h2>
//   <input
//     type="text"
//     name="title"
//     placeholder="Title"
//     value={title}
//     onChange={(e) => setTitle(e.target.value)}
//   />
//   <button type="submit">Add</button>
// </form>  