import { QueryClient } from '@tanstack/react-query';
// import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
// import {TanStackRouterDevtools} from '@tanstack/react-router-devtools';
import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';

import { Header } from '../components/Header';

interface Context {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<Context>()({
  component: RootComponent,
  notFoundComponent: () => {
    return <div>Error</div>;
  },
});

function RootComponent() {
  return (
    <>
      <Header />
      <Outlet />
      {/*<ReactQueryDevtools buttonPosition="top-right" />*/}
      {/*<TanStackRouterDevtools position="bottom-right" />*/}
    </>
  );
}
