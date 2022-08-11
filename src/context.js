import React, { useState, useContext } from 'react';

const AppContext = React.createContext();
export const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: '',
  }

const AppProvider = ({ children }) => {
let [state,setstate]=React.useState(initialState)    

  return (
    <AppContext.Provider
      value={
      {
        ...state,
        setstate
      }
      }
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };


