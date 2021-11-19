import { ReactNode } from "react";

export type Product = {
  id: string;
  title: string;
  image?: string;
}

export type ProductCardProps = {
  product: Product;
  children?: ReactNode;
};

export type ProductContextProps = {
  counter: number;
  increaseValue: number;
  increaseBy: (value: number) => void;
  product: Product;
};
