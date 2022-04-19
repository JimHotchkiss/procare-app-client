import React from 'react'
import {  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer  } from 'recharts';


const BarGraph = () => {
const data = [ {
    name: 'Page A',
    step1: 4000,
    step2: 2400,
    step3: 3200,
    step4: 1800,
    amt: 2400,
  },
  {
    name: 'Page B',
    step1: 3200,
    step2: 5400,
    step3: 1200,
    step4: 4800,
    amt: 2210,
  },
  {
    name: 'Page C',
    step1: 5000,
    step2: 5400,
    step3: 2200,
    step4: 1800,
    amt: 2290,
  },
  {
    name: 'Page D',
    step1: 1000,
    step2: 2400,
    step3: 3200,
    step4: 4800,
    amt: 2000,
  },
  {
    name: 'Page E',
    step1: 4000,
    step2: 3400,
    step3: 2200,
    step4: 1800,
    amt: 2181,
  },
  {
    name: 'Page F',
    step1: 5000,
    step2: 4400,
    step3: 3200,
    step4: 2800,
    amt: 2500,
  },
  {
    name: 'Page G',
    step1: 1000,
    step2: 2400,
    step3: 3200,
    step4: 4800,
    amt: 2100,
  },];
  return (
    <ResponsiveContainer width="80%" height="30%">
        <BarChart
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
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="step1" fill="#9b5de5" />
            <Bar dataKey="step2" fill="#f15bb5" />
            <Bar dataKey="step3" fill="#fee440" />
            <Bar dataKey="step4" fill="#00bbf9" />
            <Bar dataKey="step5" fill="#00f5d4" />
            <Bar dataKey="step6" fill="#3f37c9" />
        </BarChart>
    </ResponsiveContainer>
    
  )
}

export default BarGraph
