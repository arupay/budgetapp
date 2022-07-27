import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Form, Button } from "react-bootstrap";

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
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="type">
        <Form.Label> Is this entry an income or expense?</Form.Label>
        <Form.Check
          className="form-check-input"
          type="radio"
          id="type"
          name="type"
          value="income"
          onChange={handleChange}
          label="Income"
          required
        />
        <Form.Check
          type="radio"
          id="type"
          name="type"
          value="expense"
          onChange={handleChange}
          label="Expense"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          id="date"
          name="date"
          value={entry.date}
          onChange={handleChange}
          placeholder="DateRange"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          id="name"
          name="name"
          value={entry.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Amount</Form.Label>
        <Form.Control
          type="number"
          id="amount"
          name="amount"
          value={entry.amount}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>From</Form.Label>
        <Form.Control
          type="text"
          id="from"
          name="from"
          value={entry.from}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Select A Category</Form.Label>
        <Form.Control
          as="select"
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
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default NewTransactionForm;
