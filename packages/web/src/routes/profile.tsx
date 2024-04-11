import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/profile')({
  component: Profile,
})

function Profile() {
  return <div className="p-2">welcome to profile</div>
  
}