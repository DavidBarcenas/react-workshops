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

export type ProductTitleProps = {
  className?: string;
  title?: string;
};

export type ProductImageProps = {
  img?: string;
  className?: string;
};

export type ProductButtonsProps = {
  className?: string;
};

export type ProductCardCompound = {
  (Props: ProductCardProps): JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
}