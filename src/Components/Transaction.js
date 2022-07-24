import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  });

  return <div></div>;
}

export default Transaction;
