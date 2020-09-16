import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { PieChart, Pie, Sector, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Title from '../Title';

import { useRecoilValue } from 'recoil';
import { rosterState } from '../atoms/rosterAtom';

const COLORS = ['#0088FE',  // 3
                '#00C49F',  // 2+
                '#FFBB28',  // 2
                '#FF8042']; // less than 2

const data = [  {name: 'Group A', value: 400}, 
                {name: 'Group B', value: 300},
                {name: 'Group C', value: 300}, 
                {name: 'Group D', value: 200}];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x  = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    	{`${data[index].name} ${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function ScoresChart() {
  const theme = useTheme();

  const roster = useRecoilValue(rosterState);

  return (
    <React.Fragment>
      <Title>Reading Scores</Title>
      <ResponsiveContainer>
        <PieChart>
        <Pie
          data={data} 
          //innerRadius={60}
          outerRadius='100%' 
          fill="#8884d8"
          //endAngle={180}
          labelLine={false}
          label={renderCustomizedLabel}
          //paddingAngle={5}
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={20}/>
      </PieChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
