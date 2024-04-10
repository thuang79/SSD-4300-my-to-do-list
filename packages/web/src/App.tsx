import { useEffect, useState } from "react";
import "./App.css";

type List = {
  id: string;
  title: string;
  date: string;
};

function App() {
  const [lists, setLists] = useState<List[]>([]);
  // const [title, setTitle] = useState("");
  // const [date, setDate] = useState("");

  useEffect(() => {
    async function getLists() {
      const res = await fetch(import.meta.env.VITE_APP_API_URL + "/lists");
      const data = await res.json();  
      setLists(data.lists);
    }
    getLists();
  }, []);

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
  //         date,
  //       },
  //     }),
  //   });
  //   const data = await res.json();
  //   setLists(data.lists);
  //   setTitle("");
  //   setDate("");
  // };

  return (
    <div className="App">
      <div className="card">
        {lists.map((list) => (
          <div key={list.id}>
            <h2>{list.title}</h2>
            <p>{list.date}</p>
          </div>
        ))}
      </div>
      
      {/* <form onSubmit={handleSubmit}>
  <h2>Add To Do List</h2>
  <input
    type="text"
    name="title"
    placeholder="Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />
  <input
    type="text"
    name="date"
    placeholder="Date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
  />
  <button type="submit">Add</button>
</form> */}

    </div>
  );
}

export default App;
