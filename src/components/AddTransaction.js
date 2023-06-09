import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const AddTransaction = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      text,
      amount: +amount
    };
    addTransaction(newTransaction);
    setAmount("");
    setText("");
  };
  useEffect(() => {
    const values = JSON.parse(localStorage.getItem("items"));
    if (values) {
      Transaction = values;
    }
  });
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(text));
  });
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
