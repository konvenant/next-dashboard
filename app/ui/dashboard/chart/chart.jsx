"use client"
import React from 'react'
import styles from "./chart.module.css"
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: "Mon", visit: 120, click: 300 },
  { name: "Tue", visit: 150, click: 350 },
  { name: "Wed", visit: 200, click: 400 },
  { name: "Thu", visit: 170, click: 320 },
  { name: "Fri", visit: 220, click: 450 },
  { name: "Sat", visit: 180, click: 330 },
  { name: "Sun", visit: 140, click: 310 }
];


const Chart = () => {
  return (
    <div className={styles.container}>
     <h2 className={styles.title}>Weekly Recap</h2>
     <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{backgroundColor:"#151c2c", border:"none"}} />
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
