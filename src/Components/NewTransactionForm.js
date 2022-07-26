import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;
const categories = require("../Data/Categories");

function NewTransactionForm() {
  const [entry, setEntry] = useState({
    type: "",
    date: "",
    name: "",
    amount: "",
    from: "",
    category: "",
  });

  const navigate = useNavigate();

  const validateValue = (obj) => {
    const num = Number(obj.amount);
    if (
      (num > 0 && obj.type === "income") ||
      (num < 0 && obj.type === "expense")
    ) {
      return obj;
    } else if (num > 0 && obj.type === "expense") {
      return { ...obj, amount: -num };
    } else {
      return { ...obj, amount: Math.abs(num) };
    }
  };

  const handleChange = (e) => {
    setEntry({ ...entry, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(API, validateValue(entry))
      .then(() => {
        navigate(`/transactions/`);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend> Is this entry an income or expense?</legend>
          <div>
            <input
              type="radio"
              id="type"
              name="type"
              value="income"
              onChange={handleChange}
              required
            />
            <label htmlFor="income">Income</label>
          </div>
          <div>
            <input
              type="radio"
              id="type"
              name="type"
              value="expense"
              onChange={handleChange}
            />
            <label htmlFor="expense">Expense</label>
          </div>
        </fieldset>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={entry.date}
          onChange={handleChange}
          required
        ></input>
        <br />
        <label htmlFor="date">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={entry.name}
          onChange={handleChange}
          required
        ></input>
        <br />
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={entry.amount}
          onChange={handleChange}
          required
        ></input>
        <br />
        <label htmlFor="from">From</label>
        <input
          type="text"
          id="from"
          name="from"
          value={entry.from}
          onChange={handleChange}
          required
        ></input>
        <br />
        <label htmlFor="category">Category</label>
        <select
          value={entry.category}
          id="category"
          name="category"
          onChange={handleChange}
          required
        >
          <option value={null}></option>
          {entry.type === "income"
            ? categories
                .filter((e) => e.type === "income")
                .map((cat, idx) => {
                  return (
                    <option key={idx} value={cat.name}>
                      {cat.name}
                    </option>
                  );
                })
            : categories
                .filter((e) => e.type === "expense")
                .map((cat, idx) => {
                  return (
                    <option key={idx} value={cat.name}>
                      {cat.name}
                    </option>
                  );
                })}
        </select>
        <br />
        <input type="submit" />
      </form>
    </section>
  );
}

export default NewTransactionForm;
