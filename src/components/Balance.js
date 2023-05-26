import React, { useCallback, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>$ {total < 0 ? 0 : total}</h1>
    </>
  );
};
