import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/all-lists')({
  component: () => <div>Hello /all-lists!</div>
})