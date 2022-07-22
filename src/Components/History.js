import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function History() {
  const [history, setHistory] = useState([]);
  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setHistory(res.data);
      })
      .catch((e) => console.log("History call error", e));
  }, []);
  const dateHandler = (dateString) => {
    const dateObj = new Date(dateString);
    const readableString = dateObj.toDateString();
    return readableString;
  };
  // const deleteHandler = (index) => {
  //   axios
  //     .delete(`${API}/${index}`)
  //     .then(() => {
  //       navigate(`/`);
  //     })
  //     .catch((e) => console.log(e));
  // };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {history.map((e, idx) => {
            return (
              <tr key={idx}>
                <td>{dateHandler(e.date)}</td>
                <td>
                  <Link to={`/transactions/${idx}`}>{e.name}</Link>
                </td>
                <td>{e.amount}</td>
                <td>
                  <button>
                    <Link to="/new">✏️</Link>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default History;
