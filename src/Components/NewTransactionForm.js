import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;
const categories = require("../Data/Categories");

function NewTransactionForm() {
  const [entry, setEntry] = useState({
    date: "",
    name: "",
    amount: 0,
    from: "",
    category: "",
  });
  const navigate = useNavigate();
  const handleDateChange = (e) => {
    setEntry({ ...entry, [e.target.id]: e.target.value });
  };

  const handleTextChange = (e) => {
    setEntry({ ...entry, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(API, entry)
      .then(() => {
        navigate(`/`);
      })
      .catch((e) => {
        console.warn(e);
      });
  };
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={entry.date}
          onChange={handleDateChange}
          required
        ></input>
        <br />
        <label htmlFor="date">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={entry.name}
          onChange={handleTextChange}
          required
        ></input>
        <br />
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={entry.amount}
          onChange={handleTextChange}
          required
        ></input>
        <br />
        <label htmlFor="from">From</label>
        <input
          type="text"
          id="from"
          name="from"
          value={entry.from}
          onChange={handleTextChange}
          required
        ></input>
        <br />
        <label htmlFor="category">Category</label>
        <select
          value={entry.category}
          id="category"
          name="category"
          onChange={handleTextChange}
        >
          <option value={null}></option>
          {categories.map((cat, idx) => {
            return (
              <option key={idx} value={cat}>
                {cat}
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
