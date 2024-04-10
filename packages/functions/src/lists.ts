import { Hono } from "hono";
import { handle } from "hono/aws-lambda";

const app = new Hono();

const fakeLists = [
  { 
    id: "1", 
    title: "Throw Garbage Away",
  },
  { 
    id: "2", 
    title: "Buy Groceries",
  },
  { 
    id: "3", 
    title: "Do Laundry",
  }
];

app.get("/lists", (c) => {
  return c.json({ lists: fakeLists });
});

app.post("/lists", async (c) => {
  const body = await c.req.json()
  const list = body.list
  fakeLists.push({
    ...list, 
    id: (fakeLists.length + 1).toString() 
  })
    return c.json({ lists: fakeLists });
});

export const handler = handle(app);