import { useState, useEffect } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

const categories = require("../Data/Categories");

export default function Visuals() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(API)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => console.log("Visual call error", e));
  }, []);
  const totalByCategory = (cat) => {
    const filteredArr = data.filter((e) => e.category === cat);
    const filteredArrSum = filteredArr.reduce(
      (a, b) => a + parseInt(b.amount),
      0
    );
    return Math.abs(filteredArrSum);
  };
  const updatedCategories = categories.map((cat) => {
    return { ...cat, value: totalByCategory(cat.name) };
  });

  const width = 400;
  console.log(updatedCategories);
  return (
    <section>
      <svg width={width} height={width}></svg>
    </section>
  );
}
