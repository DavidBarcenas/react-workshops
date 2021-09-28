export type StoreState = {
  cart: Product[],
  products: Product[]
}

export type Product = {
  id: string
  image: string;
  title: string;
  price: number;
  description: string;
}