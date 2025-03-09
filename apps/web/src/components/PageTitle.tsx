import { clsx } from 'clsx';
import { ReactNode } from 'react';

interface Properties {
  action?: ReactNode;
  primary?: boolean;
  subtitle?: string;
  title: string;
}

export const PageTitle = ({ action, primary, subtitle, title }: Properties) => {
  return (
    <div>
      <div className='mb-3 flex items-center'>
        <div className='pr-6 text-xl'>{title}</div>
        {action}
      </div>
      {subtitle && (
        <div className={clsx('text-base', { 'text-white/50': primary })}>{subtitle}</div>
      )}
    </div>
  );
};
