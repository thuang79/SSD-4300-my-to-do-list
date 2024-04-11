import { createFileRoute } from '@tanstack/react-router'
import { useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/_authenticated/create')({
  component: CreatePage,
})

type List = {
  id: string;
  title: string;
  // userId: string;
};

function CreatePage(){
  const navigate = useNavigate({from: "/create"})

    const [title, setTitle] = useState("");

    async function handleSubmit(e: React.FormEvent) {
      e.preventDefault();
      try {
          // const token = await getToken();
          // if (!token) {
          //     throw new Error("No token found");
          // }
          const res = await fetch(import.meta.env.VITE_APP_API_URL + "/lists", {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  // Authorization: token,
              },
              body: JSON.stringify({
                  list: {
                      title,
                      //userId: userId, // Replace 'user-1' with the actual user ID
                      //createdAt: new Date().toISOString(), // Format date to ISO string
                  },
              }),
          });
          console.log("res", res)
          if (!res.ok) {
              console.log("res not okay")
              throw new Error("Something went wrong");
          }
          setTitle('');
          navigate({ to: "/all-lists" });
          return (await res.json()) as { lists: List[] };
      } catch (error) {
          // Handle errors gracefully
          console.error("Error:", error);
          // You can also show a user-friendly error message to the user
          // Notify the user about the error or log it for further investigation
      }
  }

return (
  <div className="App">
    <h2>Create List</h2>
    {/* {error ? (
      "An error has occurred: " + error.message
    ) : ( */}
      <form onSubmit={handleSubmit}>
       <input
         type="text"
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         id='text-field'
       />
       <button type="submit">Add</button>
     </form>
    {/* )} */}
   </div>
)
}