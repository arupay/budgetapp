import { useState, useEffect } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { Container } from "react-bootstrap";
const API = process.env.REACT_APP_API_URL;

const categories = require("../Data/Categories");

export default function Visuals() {
  const [active, setActive] = useState(null);
  const [toggle, setToggle] = useState(true);
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
    return Math.abs(filteredArrSum); //A NUMBER -- if neg absolute value returned
  };
  const updatedCategories = categories.map((cat) => {
    return { ...cat, value: totalByCategory(cat.name) };
  });
  const expenses = updatedCategories.filter((cat) => cat.type === "expense");
  const income = updatedCategories.filter((cat) => cat.type === "income");

  const width = 380;
  const half = width / 2;
  const clickHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div className="row">
      <button
        type="button"
        className="btn btn-info btn-md text-center"
        onClick={clickHandler}
      >
        {toggle ? "Click To Show Income" : "Click To Show Expenses"}
      </button>
      <Container className="col-md-6 pt-3">
        <svg width={width} height={width}>
          <Group top={half} left={half}>
            <Pie
              data={toggle ? expenses : income}
              pieValue={(data) => data.value}
              outerRadius={half}
              innerRadius={({ data }) => {
                // console.log({ data }); ISOLATED DATA , set up ternary to conditionally render w/ hover effect
                const size = active && active.name === data.name ? 25 : 15;
                return half - size;
              }}
              padAngle={0.01}
            >
              {(pie) => {
                return pie.arcs.map((arc) => {
                  return (
                    <g
                      key={arc.data.name}
                      onMouseEnter={() => setActive(arc.data)}
                      onMouseLeave={() => setActive(null)}
                    >
                      <path d={pie.path(arc)} fill={arc.data.color}></path>
                    </g>
                  );
                });
                //consoled logged arc to see an object, each element in data
              }}
            </Pie>
            {active ? (
              <>
                <Text textAnchor="middle" fontSize={30} dy={-20} fill="#000">
                  {`$${active.value}`}
                </Text>
                <Text
                  textAnchor="middle"
                  fill={active.color}
                  fontSize={20}
                  dy={20}
                >
                  {active.name}
                </Text>
              </>
            ) : (
              <>
                <Text textAnchor="middle" fontSize={30} dy={-20}>
                  {toggle
                    ? `$${expenses.reduce((acc, ele) => acc + ele.value, 0)}`
                    : `$${income.reduce((acc, ele) => acc + ele.value, 0)}`}
                </Text>
                <Text textAnchor="middle" fontSize={20} dy={20}>
                  {toggle
                    ? `Total Expenses:  ${expenses.length} Sources`
                    : `Total Income:  ${income.length} Sources`}
                </Text>
              </>
            )}
          </Group>
        </svg>
      </Container>
    </div>
  );
}
