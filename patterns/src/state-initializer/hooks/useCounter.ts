import { useEffect, useState } from "react";

import type { Product, ProductChangeArgs, InitialValues } from "../../types/product";

type Counter = {
  counter: number;
  increaseBy: (value: number) => void;
}

type Props = {
  product: Product;
  value?: number;
  onChange?: (args: ProductChangeArgs) => void
  initialValues?: InitialValues
}

const DEFAULT_VALUE = 0

function useCounter({onChange, product, initialValues, value = DEFAULT_VALUE}: Props): Counter {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  useEffect(() => {
    setCounter(value);
  }, [value])
  
  function increaseBy(value: number) {
    const newValue = Math.max(counter + value, DEFAULT_VALUE)
    setCounter(newValue);
    onChange && onChange({count: newValue, product})
  }

  return {counter, increaseBy}
}

export default useCounter;