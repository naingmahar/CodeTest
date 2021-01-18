export interface Product {
  name: string;
  product_code: null | string | number;
  list_price: number;
  product_id: number;
  percentage: number;
  promo_name: boolean;
  promo_desc: boolean;
  tax_percent: number;
  status: string;
  product_image: string;
  category_id: number;
  description: string;
  brand_id: null | string | number;
  product_type_id: null | number;
  is_promotion: boolean;
}

export interface ProductList {
  itemcount: number;
  product_list: Product[];
}
