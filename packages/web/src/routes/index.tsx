import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: About,
});

function About() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md mt-10">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome to the Simple To Do List App!</h1>
      <p className="text-gray-600 text-lg mb-4">
        Discover the simplicity of staying organized with our Simple To Do List App. Designed for straightforward task management, this app allows you to jot down tasks you need to remember throughout the day.
      </p>
      <p className="text-gray-600 text-lg mt-4">
        Start using the Simple To Do List App today to enhance your productivity with a clutter-free approach. Add your tasks and focus on getting them done one at a time!
      </p>
    </div>
  );
}
