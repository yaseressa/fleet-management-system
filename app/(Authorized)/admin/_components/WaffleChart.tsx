"use client";
import React, { PureComponent, useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import Loading from "../loading";

const WaffleChart = ({ data }) => {
  const [realdata, setrealdata] = useState([]);
  const [color, setcolor] = useState([]);
  useEffect(() => {
    setrealdata(
      data.labels &&
        data.labels.map((label, index) => {
          return {
            name: label,
            value: data.data[index],
          };
        })
    );
    setcolor(data.backgroundColor && data.backgroundColor);
  }, [data]);

  const RADIAN = Math.PI / 180;
  const renderer = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="mb-6 m-3  rounded-2xl border-double border-secondary border-2 backdrop-blur-3xl shadow-md shadow-secondary">
      {" "}
      {data ? (
        <>
          <h1 className="font-rock font-extralight uppercase text-primary px-2 text-center text-lg">
            DISTRIBUTIONS
          </h1>
          <div className="w-full flex justify-center items-start">
            <PieChart width={250} height={250}>
              <Pie
                data={realdata && realdata}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderer}
                outerRadius={110}
                dataKey="value"
                stroke="0px"
              >
                {realdata &&
                  realdata.map((entry, index) => {
                    return (
                      <Cell
                        key={`cell-${index}`}
                        fill={color && color[index % color.length]}
                        color="#000"
                      />
                    );
                  })}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default WaffleChart;
