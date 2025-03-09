import { createFileRoute } from '@tanstack/react-router';

import { Routes } from '../constants/routes';

export const Route = createFileRoute(Routes.INDEX)({
  component: () => <></>,
});
