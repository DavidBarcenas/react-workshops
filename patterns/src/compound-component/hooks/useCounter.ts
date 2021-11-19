import { useState } from "react";

type Counter = {
  counter: number;
  increaseBy: (value: number) => void;
}

function useCounter(initialValue: number): Counter {
  const [counter, setCounter] = useState<number>(initialValue);
  const minValue = 0;
  
  function increaseBy(value: number) {
    setCounter(prev => Math.max(prev + value, minValue));
  }

  return {counter, increaseBy}
}

export default useCounter;