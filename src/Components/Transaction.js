import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

//TO:DO How to display this data so it is easier to consume for end user?

function Transaction() {
  const [item, setItem] = useState([]);
  let { idx } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/${idx}`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [idx]);
  const handleDelete = (idx) => {
    axios
      .delete(`${API}/${idx}`)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((e) => console.log(e));
  };
  const dateHandler = (dateString) => {
    const dateObj = new Date(dateString.split("-"));
    const readableString = dateObj.toDateString();
    return readableString;
  };

  return (
    <section className="data">
      {item.date && (
        <article>
          <h4>Date: {dateHandler(item.date)}</h4>
          <h4>Type: {item.type.toUpperCase()}</h4>
          <h4>Name: {item.name}</h4>
          <h4>Amount: {item.amount}</h4>
          <h4>From: {item.from}</h4>
          <h4>Category: {item.category}</h4>
          <footer>
            <button onClick={() => navigate("/transactions")}>🔙</button>{" "}
            <button onClick={() => navigate(`/transactions/${idx}/edit`)}>
              ✏️
            </button>
            <button onClick={() => handleDelete(idx)}>❌</button>
          </footer>
        </article>
      )}
    </section>
  );
}

export default Transaction;
