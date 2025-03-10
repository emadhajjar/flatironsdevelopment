interface Properties {
  progress: number;
}
export const Progress = ({ progress }: Properties) => {
  return (
    <div className='w-full rounded-full bg-gray-200 dark:bg-gray-700'>
      <div
        className='rounded-full bg-blue-600 p-0.5 text-center text-xs leading-none font-medium text-blue-100'
        style={{ width: `${progress}%` }}
      >
        {' '}
        {progress}%
      </div>
    </div>
  );
};
