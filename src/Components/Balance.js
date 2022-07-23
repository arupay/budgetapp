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
  return <h1>Bank Account Total: {sum} </h1>;
}

export default Balance;
