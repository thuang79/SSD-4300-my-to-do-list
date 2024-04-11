import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: About,
})

function About() {
  return <div className="p-2">Hello! Feel free to use this app to keep track on what you need to do today! </div>
}