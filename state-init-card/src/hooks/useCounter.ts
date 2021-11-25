import { useEffect, useState, useRef } from 'react';

import type { Product, ProductChangeArgs, InitialValues } from "../types/product";

type Counter = {
  counter: number;
  isMaxCountReached?: boolean;
  increaseBy: (value: number) => void;
  reset: () => void;
}

type Props = {
  product: Product;
  value?: number;
  initialValues?: InitialValues;
  onChange?: (args: ProductChangeArgs) => void
}

const DEFAULT_VALUE = 0

function useCounter({onChange, product, initialValues, value = DEFAULT_VALUE}: Props): Counter {
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false)

  
  useEffect(() => {
    if(!isMounted.current) {
      return;
    }
    
    setCounter(value);
  }, [value])
 
  useEffect(() => {
    isMounted.current = true
  }, [])
  
  function increaseBy(value: number) {
    let newValue = Math.max(counter + value, DEFAULT_VALUE);

    if(initialValues?.maxCount) {
      newValue =  Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);
    onChange && onChange({count: newValue, product})
  }

  function reset() {
    setCounter(initialValues?.count || value)
  }

  return {counter, increaseBy, reset, isMaxCountReached: counter === initialValues?.maxCount}
}

export default useCounter;