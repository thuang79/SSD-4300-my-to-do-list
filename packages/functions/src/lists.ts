import { Hono } from "hono";
import { handle } from "hono/aws-lambda";

const app = new Hono();

const fakeLists = [
  { 
    id: "1", 
    title: "Throw Garbage Away",
    date: "2021-10-01"
  },
  { 
    id: "2", 
    title: "Buy Groceries",
    date: "2021-10-02"
  },
  { 
    id: "3", 
    title: "Do Laundry",
    date: "2021-10-03"
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
    return c.json({ list: fakeLists });
});

export const handler = handle(app);