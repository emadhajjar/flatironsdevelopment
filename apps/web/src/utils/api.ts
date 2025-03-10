import { AxiosProgressEvent } from 'axios';

import { http } from './http';
import { Product } from './interface';

export const getProductList = async () => {
  const { data } = await http.get<Product[]>('/products');

  return data;
};

export const uploadProductList = async (
  file: File,
  onUploadProgress: (progressEvent: AxiosProgressEvent) => void,
) => {
  const formData = new FormData();
  formData.append('file', file);

  return http.post<Product[]>('/products/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress,
  });
};
