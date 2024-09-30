import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay?: number): T {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const time = setTimeout(() => {
      setDebounceValue(value);
    }, delay || 500);

    return () => {
      clearTimeout(time);
    };
  }, [value, delay]);

  return debounceValue;
}
