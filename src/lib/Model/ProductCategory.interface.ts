export interface ProductCategory {
  category_id: number;
  category_name: string;
  category_image: string;
  special_category: boolean;
  sub_category: ProductCategory[];
}
