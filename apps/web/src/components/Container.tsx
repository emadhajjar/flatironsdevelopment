import { clsx } from 'clsx';
import { ReactNode } from 'react';

interface Properties {
  children: ReactNode;
  className?: string;
}
export const Container = ({ children, className }: Properties) => {
  return <div className={clsx(className, 'container mx-auto')}>{children}</div>;
};
