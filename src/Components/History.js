import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./History.css";
import "bootstrap/dist/css/bootstrap.css";

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
  // const dateHandler = (dateString) => {
  //   const dateObj = new Date(dateString.split("-"));
  //   // SPLIT TO SHOW CORRECT DATE AND BYPASS JS 1 DAY OFF Error
  //   //More info here https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  //   const readableString = dateObj.toDateString();
  //   return readableString;
  // };
  const transColor = (val) => {
    return val > 0 ? " green" : " red";
  };

  return (
    <div className="container my-5">
      <table className="table align-middle mb-0 bg-white">
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
                <td>{e.date}</td>
                <td>
                  <Link className={`links`} to={`/transactions/${idx}`}>
                    {e.name}
                  </Link>
                </td>
                <td className={transColor(e.amount)}>{e.amount}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => navigate(`/transactions/${idx}/edit`)}
                  >
                    Edit
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
