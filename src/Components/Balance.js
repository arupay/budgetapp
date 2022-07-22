import { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((e) => console.log("There has been an error", e));
  }, []);
  const sum = transactions.reduce((a, b) => a + b.amount, 0);
  return <h1>Bank Account Total: {sum} </h1>;
}

export default TransactionHistory;
