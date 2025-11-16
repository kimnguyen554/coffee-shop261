export interface Product {
  id: string;
  name: string;
  price: string;
  type: string;
  img: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
