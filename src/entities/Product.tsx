import type { Resource } from "solid-js";

export default interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export default interface ProductsResponse {
  products: Resource<Product[]>;
}
