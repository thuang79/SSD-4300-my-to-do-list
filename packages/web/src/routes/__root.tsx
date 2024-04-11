import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/all-lists" className="[&.active]:font-bold">
          All List
        </Link>{' '}
        <Link to="/create" className="[&.active]:font-bold">
          Create
        </Link>{' '}
        <Link to="/profile" className="[&.active]:font-bold">
          Profile
        </Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
})