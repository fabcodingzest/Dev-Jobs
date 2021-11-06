import { useEffect, useState } from 'react';

export function usePrefersDarkMode() {
  const [value, setValue] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setValue(mediaQuery.matches);
    console.log(mediaQuery.matches);

    // This is for the case in user changes system preference
    const handler = () => setValue(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    // And then we clean up
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return value;
}
