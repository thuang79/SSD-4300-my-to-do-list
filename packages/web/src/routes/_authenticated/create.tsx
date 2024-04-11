import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/create')({
  component: () => <div>Hello /_authenticated/create!</div>
})