import React, { createContext, useContext } from 'react';
import useWindowSize from './useWindowSize';

const WindowSizeContext = createContext();

export const useWindowSizeContext = () => {
  return useContext(WindowSizeContext);
};

export const WindowSizeProvider = ({ children }) => {
  const windowSize = useWindowSize();
  return (
    <WindowSizeContext.Provider value={windowSize}>
      {children}
    </WindowSizeContext.Provider>
  );
};
