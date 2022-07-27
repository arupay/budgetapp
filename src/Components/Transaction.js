import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Transaction.css";
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
  // const dateHandler = (dateString) => {
  //   const dateObj = new Date(dateString.split("-"));
  //   const readableString = dateObj.toDateString();
  //   return readableString;
  // };

  return (
    <div>
      <div className="trans-container">
        <div className="trans-data">
          <section className="mission">
            {item.date && (
              <article>
                <div>
                  <strong>Date:</strong> {item.date}
                </div>
                <div>
                  <strong>Type:</strong> {item.type.toUpperCase()}
                </div>
                <div>
                  <strong>Name:</strong> {item.name}
                </div>
                <div>
                  <strong>Amount:</strong> {item.amount}
                </div>
                <div>
                  <strong>From:</strong> {item.from}
                </div>
                <div>
                  <strong>Category:</strong> {item.category}
                </div>
              </article>
            )}
          </section>
          <button onClick={() => navigate("/transactions")}>🔙</button>{" "}
          <button onClick={() => navigate(`/transactions/${idx}/edit`)}>
            ✏️
          </button>
          <button onClick={() => handleDelete(idx)}>❌</button>
        </div>
      </div>
    </div>
  );
}

export default Transaction;
