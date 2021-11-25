import { CSSProperties, ReactNode } from "react";

export type Product = {
  id: string;
  title: string;
  image?: string;
}

export type ProductCardProps = {
  product: Product;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  value?: number;
  onChange?: (args: ProductChangeArgs) => void
  initialValues?: InitialValues
};


export type ProductCardStateInit = ProductCardProps & {
  children: () => JSX.Element
}

export type InitialValues = {
  count?: number;
  maxCount?: number;
}

export type ProductContextProps = {
  counter: number;
  increaseValue: number;
  product: Product;
  increaseBy: (value: number) => void;
  maxCount?: number;
};

export type ProductTitleProps = {
  className?: string;
  title?: string;
  style?: CSSProperties
};

export type ProductImageProps = {
  img?: string;
  className?: string;
  style?: CSSProperties
};

export type ProductButtonsProps = {
  className?: string;
  style?: CSSProperties
};

export type ProductCardCompound = {
  (Props: ProductCardProps): JSX.Element;
  Buttons: (Props: ProductButtonsProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
}

export type ProductChangeArgs = {
  product: Product;
  count: number;
}