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
        return " red";
      case value > 1000:
        return "green";
      default:
        return "white";
    }
  };
  return (
    <div>
      Balance (USD): $
      <span style={{ color: balanceColor(sum), fontWeight: "bold" }}>
        {sum.toFixed(2)}
      </span>
    </div>
  );
}

export default Balance;
