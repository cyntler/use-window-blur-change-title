import { useEffect, useRef } from 'react';

const setTitle = (title: string) => {
  document.title = title;
};

export const useWindowBlurChangeTitle = (titleWhenBlur: string) => {
  const previousTitle = useRef<string>();

  const handleWindowBlur = () => {
    previousTitle.current = document.title;
    setTitle(titleWhenBlur);
  };

  const handleWindowFocus = () => {
    if (previousTitle.current) {
      setTitle(previousTitle.current);
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('focus', handleWindowFocus);

    return () => {
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('focus', handleWindowFocus);
    };
  }, [titleWhenBlur]);
};
