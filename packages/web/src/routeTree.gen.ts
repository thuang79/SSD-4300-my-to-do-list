/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProfileImport } from './routes/profile'
import { Route as NewListImport } from './routes/new-list'
import { Route as AllListsImport } from './routes/all-lists'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const ProfileRoute = ProfileImport.update({
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const NewListRoute = NewListImport.update({
  path: '/new-list',
  getParentRoute: () => rootRoute,
} as any)

const AllListsRoute = AllListsImport.update({
  path: '/all-lists',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/all-lists': {
      preLoaderRoute: typeof AllListsImport
      parentRoute: typeof rootRoute
    }
    '/new-list': {
      preLoaderRoute: typeof NewListImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      preLoaderRoute: typeof ProfileImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  AllListsRoute,
  NewListRoute,
  ProfileRoute,
])

/* prettier-ignore-end */
