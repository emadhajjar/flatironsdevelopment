import { useCallback, useState } from 'react';

import { uploadProductList } from '../utils/api';
import { Product } from '../utils/interface';
import { DropzoneFile } from './DropzoneFile';
import { Products } from './Products';
import { Progress } from './Progress';
import { Toast } from './Toast';

export const FileUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [products, setProducts] = useState<Product[] | undefined>();

  const clearProducts = useCallback(() => {
    setUploading(false);
    setUploadProgress(0);
    setProducts(undefined);
  }, []);

  const handleFileSelected = useCallback(
    async (files: FileList) => {
      setUploading(true);

      try {
        const response = await uploadProductList(files[0], (progressEvent) => {
          if (progressEvent.total != undefined) {
            setUploadProgress(Math.round((progressEvent.loaded * 100) / progressEvent.total));
          }
        });

        setProducts(response.data);
      } catch (error) {
        clearProducts();
        console.error(error);
      }
    },
    [clearProducts],
  );

  return (
    <div>
      {uploading ?
        <div className='pr-6 text-lg'>
          {products == undefined ?
            <Progress progress={uploadProgress} />
          : <>
              <Toast onClose={clearProducts} text='Upload Successful!' />
              <Products products={products} />
            </>
          }
        </div>
      : <DropzoneFile accept='.csv' onFilesSelected={handleFileSelected} text='CSV file only' />}
    </div>
  );
};
