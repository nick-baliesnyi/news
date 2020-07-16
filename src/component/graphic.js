import React, { useState } from "react";
import {
  LineChart,
  XAxis,
  Tooltip,
  Line,
  CartesianGrid,
  YAxis,
  AreaChart,
  Brush,
  Area,
} from "recharts";
import { Container } from "react-bootstrap";

const Graphic = (props) => {
  const [data, setData] = useState([
    { date: "01.05.20", good: 10, bad: 1 },
    { date: "02.05.20", good: 10, bad: 7 },
    { date: "03.05.20", good: 3, bad: 1 },
    { date: "04.05.20", good: 5, bad: 8 },
    { date: "05.05.20", good: 8, bad: 5 },
    { date: "06.05.20", good: 11, bad: 3 },
    { date: "07.05.20", good: 1, bad: 1 },
    { date: "08.05.20", good: 7, bad: 4 },
    { date: "09.05.20", good: 3, bad: 2 },
    { date: "10.05.20", good: 10, bad: 13 },
  ]);

  return (
    <Container className=" pt-5 pb-5 mt-4"  style={{width: '1100px', height: '800px'}}>
      <LineChart width={1100} height={700} data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="date" />
        <YAxis domain={["auto", "auto"]} />
        <Tooltip
          wrapperStyle={{
            borderColor: "white",
            boxShadow: "2px 2px 3px 0px rgb(204, 204, 204)",
          }}
          contentStyle={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
          labelStyle={{ fontWeight: "bold", color: "#666666" }}
        />
        <Line dataKey="good" stroke="#00FF00" dot={false} />
        <Line dataKey="bad" stroke="#FF0000" dot={false} />
      </LineChart>
    </Container>
  );
};

export default Graphic;
