import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <div className="w-screen h-screen bg-white dark:bg-black text-black dark:text-white">
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/all-lists" className="[&.active]:font-bold">
          Lists
        </Link>
        <Link to="/new-list" className="[&.active]:font-bold">
          Create
        </Link>
        <Link to="/new-list" className="[&.active]:font-bold">
          Profile
        </Link>
      </div>
      <hr />
      <Outlet />
    </div>
  ),
})