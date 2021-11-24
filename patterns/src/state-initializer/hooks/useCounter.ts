import { useEffect, useRef, useState } from "react";
import type { Product, ProductChangeArgs } from "../../types/product";

type Counter = {
  counter: number;
  increaseBy: (value: number) => void;
}

type Props = {
  product: Product;
  value?: number;
  onChange?: (args: ProductChangeArgs) => void
}

const DEFAULT_VALUE = 0

function useCounter({onChange, product, value = DEFAULT_VALUE}: Props): Counter {
  const [counter, setCounter] = useState<number>(value);
  const isControlled = useRef<boolean>(!!onChange)

  useEffect(() => {
    setCounter(value);
  }, [value])
  
  function increaseBy(value: number) {
    if(isControlled.current && onChange) {
      return onChange({count: value, product})
    }

    const newValue = Math.max(counter + value, DEFAULT_VALUE)
    setCounter(newValue);
    onChange && onChange({count: newValue, product})
  }

  return {counter, increaseBy}
}

export default useCounter;