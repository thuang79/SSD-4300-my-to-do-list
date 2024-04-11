import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/new-list')({
  component: () => <div>Hello from create list!</div>
})