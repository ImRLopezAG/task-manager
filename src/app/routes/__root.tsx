import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ThemeProvider } from '@app/providers'
import { Toaster } from '@ui/toaster'
import { Header } from '@components/header'

export const Route = createRootRoute({
  component: RootComponent
})

function RootComponent (): JSX.Element {
  return (
    <main>
      <Header />
      <ThemeProvider>
        <Outlet />
      </ThemeProvider>
      <Toaster />
      <TanStackRouterDevtools position='bottom-right' />
    </main>
  )
}
