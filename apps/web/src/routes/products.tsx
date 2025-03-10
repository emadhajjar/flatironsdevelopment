import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { Suspense } from 'react';

import { Container } from '../components/Container';
import { PageTitle } from '../components/PageTitle';
import { Products } from '../components/Products';
import { QueryKeys } from '../constants/queryKeys';
import { Routes } from '../constants/routes';
import { getProductList } from '../utils/api';

const setupQueryOptions = () =>
  queryOptions({
    queryFn: getProductList,
    queryKey: [QueryKeys.LIST_PRODUCTS],
    staleTime: Infinity,
  });

const RouteComponent = () => {
  return (
    <Suspense fallback='Loading...'>
      <MainComponent />
    </Suspense>
  );
};

export const Route = createFileRoute(Routes.PRODUCTS)({
  component: RouteComponent,
  loader: ({ context }) => {
    context.queryClient.prefetchQuery(setupQueryOptions());
  },
});

const MainComponent = () => {
  const { data } = useSuspenseQuery(setupQueryOptions());

  return (
    <Container className='my-14 flex flex-col gap-10'>
      <PageTitle primary title='All Products' />
      <Products products={data} />
    </Container>
  );
};
