import { useState } from "react";
import type { Product, ProductChangeArgs } from "../../types/product";

type Counter = {
  counter: number;
  increaseBy: (value: number) => void;
}

type Props = {
  product: Product;
  onChange?: (args: ProductChangeArgs) => void
}

function useCounter({onChange, product}: Props): Counter {
  const initialValue = 1
  const [counter, setCounter] = useState<number>(initialValue);
  const minValue = 0;
  
  function increaseBy(value: number) {
    const newValue = Math.max(counter + value, minValue)

    setCounter(newValue);
    onChange && onChange({count: newValue, product})
  }

  return {counter, increaseBy}
}

export default useCounter;