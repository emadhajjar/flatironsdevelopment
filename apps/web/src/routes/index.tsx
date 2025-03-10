import { createFileRoute } from '@tanstack/react-router';
import { Suspense } from 'react';

import { Container } from '../components/Container';
import { FileUpload } from '../components/FileUpload';
import { PageTitle } from '../components/PageTitle';
import { Routes } from '../constants/routes';

const RouteComponent = () => {
  return (
    <Suspense fallback='Loading...'>
      <MainComponent />
    </Suspense>
  );
};

export const Route = createFileRoute(Routes.INDEX)({
  component: RouteComponent,
});

const MainComponent = () => {
  return (
    <Container className='my-14 flex flex-col gap-10'>
      <PageTitle primary title='Upload Products' />
      <FileUpload />
    </Container>
  );
};
