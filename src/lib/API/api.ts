import Axios from './axios';
import {ProductCategory} from '../Model/ProductCategory.interface';
import {ProductList} from '../Model/Product.interface';
import {ProductDetail} from '../Model/ProductDetail.interface';
type APIResProps<T> = {
  count: number;
  data: T;
};

export async function getCategories(): Promise<APIResProps<ProductCategory[]>> {
  return new Promise((resolve, reject) => {
    Axios.get(`/product/categories`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.message || error);
      });
  });
}

export async function getProductsByCategory(
  categ_id: number,
): Promise<APIResProps<ProductList>> {
  return new Promise((resolve, reject) => {
    Axios.get(`/list/product?categ_id=${categ_id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.message || error);
      });
  });
}

export async function getProductDetailsById(
  product_id: number,
): Promise<APIResProps<ProductDetail[]>> {
  return new Promise((resolve, reject) => {
    Axios.get(`/detail/product/list?product_id=${product_id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        reject(error.message || error);
      });
  });
}
