import React, { useReducer, createContext, useEffect } from "react";
import AppReducer from "./AppReducer";
//state value
const initialState = {
  transactions: []
};

//createContext
export const GlobalContext = createContext(initialState);

//GlobalProvider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //action
  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction
    });
  }

  function deleteTransaction(id) {
    dispatch({
      type: "delete_TRANSACTION",
      payload: id
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
