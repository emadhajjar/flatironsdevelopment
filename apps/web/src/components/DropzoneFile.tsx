import { ChangeEvent, DragEvent, useCallback } from 'react';

import { useUuid } from '../utils/hooks';

interface Properties {
  accept?: string;
  onFilesSelected?: (file: FileList) => void;
  text?: string;
}
export const DropzoneFile = ({ accept, onFilesSelected, text }: Properties) => {
  const id = useUuid();

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const droppedFiles = event.dataTransfer?.files;
      if (droppedFiles !== undefined && droppedFiles.length > 0) {
        onFilesSelected?.(droppedFiles);
      }
    },
    [onFilesSelected],
  );

  const handleFileChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.currentTarget.files;
      if (files !== null) {
        onFilesSelected?.(files);
      }
    },
    [onFilesSelected],
  );

  return (
    <div
      className='flex w-full items-center justify-center'
      onDragOver={(event) => event.preventDefault()}
      onDrop={handleDrop}
    >
      <label
        className='flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600 dark:hover:bg-gray-800'
        htmlFor={id}
      >
        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
          <svg
            aria-hidden='true'
            className='mb-4 h-8 w-8 text-gray-500 dark:text-gray-400'
            fill='none'
            viewBox='0 0 20 16'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
            />
          </svg>
          <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>
            <span className='font-semibold'>Click to upload</span> or drag and drop
          </p>
          {text && <p className='text-xs text-gray-500 dark:text-gray-400'>{text}</p>}
        </div>
        <input accept={accept} className='hidden' id={id} onChange={handleFileChange} type='file' />
      </label>
    </div>
  );
};
