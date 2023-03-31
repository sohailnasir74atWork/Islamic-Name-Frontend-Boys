import React, { createContext, useContext, useState } from 'react';

// Create a context object
export const GlobalStateContext = createContext();

// Create a provider component that will wrap your app
export function GlobalStateProvider({ children }) {
    const [activeBtnIndex, setActiveBtnIndex] = useState(0);
    const [darkMode, setDarkMode] = useState(false);


    // Define your state and functions that modify your state
    const state = {
      activeBtnIndex,
      setActiveBtnIndex,
      handleButtonClick: (index) => {
        setActiveBtnIndex(index);
      },
      handleDarkMode: ()=>{
        setDarkMode(!darkMode)
      },
      darkMode
    };

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  );
}

// Custom hook to access the global state
export function useGlobalState() {
  // Use the useContext hook to access the context object
  const context = useContext(GlobalStateContext);

  // Throw an error if the hook is used outside of the GlobalStateProvider
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }

  return context;
}
