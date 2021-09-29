import { DetailForm } from './detailForm';

export type StoreState = {
  cart: Product[],
  products: Product[]
  buyer: DetailForm
}

export type Product = {
  id: string
  image: string;
  title: string;
  price: number;
  description: string;
}