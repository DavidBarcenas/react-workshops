import { ReactNode } from "react";

export type Product = {
  id: string;
  title: string;
  image?: string;
}

export type ProductCardProps = {
  product: Product;
  children?: ReactNode;
  className?: string;
};

export type ProductContextProps = {
  counter: number;
  increaseValue: number;
  increaseBy: (value: number) => void;
  product: Product;
};

export type ProductCardCompound = {
  ({ product, children }: ProductCardProps): JSX.Element;
  Title: ({ title }: {title?:string}) => JSX.Element;
  Image: ({ img }: {img?:string}) => JSX.Element;
  Buttons: () => JSX.Element;
}