import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useEffect, useState } from "react";

export const Route = createFileRoute('/new-list')({
  component: NewListPage,
});

function NewListPage() {
    const [title, setTitle] = useState("");
    const navigate = useNavigate(); 

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const res = await fetch(import.meta.env.VITE_APP_API_URL + "/lists", {
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
      setTitle("");
      navigate({to:'/all-lists'}); 
    };

    return (
      <div className="p-2">
        <h2>Add To Do List</h2>
        <form onSubmit={handleSubmit}>
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