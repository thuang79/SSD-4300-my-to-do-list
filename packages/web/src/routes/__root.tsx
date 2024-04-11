import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>{' '}
        <Link to="/all-lists" className="[&.active]:font-bold">
          All List
        </Link>{' '}
        <Link to="/new-list" className="[&.active]:font-bold">
         New List
        </Link>{' '}
      </div>
      <hr />
      <Outlet />
    </>
  ),
})