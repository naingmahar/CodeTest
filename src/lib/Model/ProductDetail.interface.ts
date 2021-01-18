export interface ProductDetail {
  id: number;
  name: string;
  code: string | null | number;
  sku: string | null;
  list_price: number;
  description: string | null;
  category_id: number;
  category_name: string;
  status: string;
  percentage: number;
  promo_name: boolean;
  promo_desc: boolean;
  url_link: string;
  gallery: [];
  is_promotion: boolean;
  attribute_list: Array<{
    product_attribute: string;
    attribute_id: number;
    attributes: Array<{
      id: number;
      name: string;
      price: number;
    }>;
  }>;
}
