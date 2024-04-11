import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return <div className="p-2">Welcome to our to-do list app! We believe that staying organized should be simple and intuitive. <br/>
  Our app is designed to help you manage your tasks efficiently, whether you're planning your day, organizing <br/>
  a project, or keeping track of your goals.</div>
  
}