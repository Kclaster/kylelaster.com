// External Dependencies
import React, { useEffect, useRef, useState } from 'react';

// exports
export function useCounter() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 20);
  console.log(count);
  return <h1>{count}</h1>;
}

function useInterval(callback: any, delay: number) {
  const savedCallback: any = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export function useTextField(initialState: string) {
  const [value, setValue] = useState(initialState);

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return {
    onChange,
    value,
  }
}
