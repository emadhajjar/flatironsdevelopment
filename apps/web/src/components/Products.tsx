import dayjs from 'dayjs';

import { Product } from '../utils/interface';

interface Properties {
  products: Product[];
}

export const Products = ({ products }: Properties) => {
  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400'>
        <thead className='bg-gray-50 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th className='px-6 py-3' scope='col'>
              Product name
            </th>
            <th className='px-6 py-3' scope='col'>
              Price
            </th>
            <th className='px-6 py-3' scope='col'>
              Expiration date
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              className='border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800'
              key={product.id}
            >
              <th
                className='px-6 py-4 font-medium whitespace-nowrap text-gray-900 dark:text-white'
                scope='row'
              >
                {product.name}
              </th>
              <td className='px-6 py-4'>{product.price} BRL</td>
              <td className='px-6 py-4'>{dayjs(product.expiration).format('DD/MM/YYYY')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
