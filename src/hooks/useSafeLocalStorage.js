import { useState } from 'react';

export function useSafeLocalStorage(key, initialValue) {
  const [valueProxy, setValueProxy] = useState(() => {
    try {
      // see if localStorage have theme stored
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch {
      // this will return undefined because of no initial value at first
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      // set theme in the case of manual switch
      window.localStorage.setItem(key, value);
      setValueProxy(value);
    } catch {
      // just change the value if there was already stored value
      setValueProxy(value);
    }
  };

  return [valueProxy, setValue];
}