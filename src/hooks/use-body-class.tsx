import { useEffect } from 'react';

const addBodyClass = (className: string) => document.body.classList.add(className);
const removeBodyClass = (className: string) => document.body.classList.remove(className);

const useBodyClass = (isOpen: boolean): void => {
  useEffect(() => {
    if (isOpen) addBodyClass('menu-is-open');
    else removeBodyClass('menu-is-open');

    return () => removeBodyClass('menu-is-open');
  }, [isOpen]);
};

export default useBodyClass;
