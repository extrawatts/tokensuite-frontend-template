import { useEffect, useState } from 'react';

const useKeyPress = (targetKey: string): boolean => {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler(event: KeyboardEvent): void {
    if (event.key === targetKey) {
      setKeyPressed(true);
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, []);
  return keyPressed;
};

export default useKeyPress;
