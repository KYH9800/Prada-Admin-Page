import { useCallback, useState } from 'react';

export default (initialValue = null) => {
  const [value, setValue] = useState(initialValue);

  const handler = useCallback((e) => {
    console.log('custom hooks: ', e.target.value);
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
};
