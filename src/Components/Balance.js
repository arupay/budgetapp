import { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Balance() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((e) => console.log("Balance call error", e));
  }, []);

  const sum = transactions.reduce((a, b) => a + parseInt(b.amount), 0);
  const balanceColor = (value) => {
    switch (true) {
      case value < 0:
        return "red";
      case value > 1000:
        return "green";
      default:
        return "gray";
    }
  };
  return (
    <h2>
      Bank Account Total (USD): $
      <span style={{ color: balanceColor(sum) }}> {sum.toFixed(2)} </span>
    </h2>
  );
}

export default Balance;
