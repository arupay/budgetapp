import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function History() {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setHistory(res.data);
      })
      .catch((e) => console.log("History call error", e));
  }, []);
  const dateHandler = (dateString) => {
    const dateObj = new Date(dateString.split("-"));
    // SPLIT TO SHOW CORRECT DATE AND BYPASS JS 1 DAY OFF Error
    //More info here https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
    const readableString = dateObj.toDateString();
    return readableString;
  };
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
                  <button onClick={() => navigate(`/transactions/${idx}/edit`)}>
                    ✏️
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
