import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Title from '../Title';

import { useRecoilValue } from 'recoil';
import { rosterState } from '../atoms/rosterAtom';

const COLORS = ['#FF3032',   // less than 2
                '#FFBB28',  // 2
                '#00C49F',  // 2+
                '#0088FE']; // 3

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x  = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy  + radius * Math.sin(-midAngle * RADIAN);

    //don't put a lable on empty data sets
    if(percent === 0){
        return (<></>);
    }
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
/**
 * 
 * @param {Object<Linguist>} roster 
 * @returns Data scoreBuckets  
 * 
 * iterates over roster, extracts scores and saves increments returns an objectArray
 * of scores totaled into a histogram of scores
 */
const totalScores = (roster = {}) => {
    
    // declare the shape of the histogram and it's buckets
    let scoreBuckets = [
        {name: 'SubPro', value: 0},
        {name: '2', value: 0},
        {name: '2+', value: 0},
        {name: '3 or Higher', value: 0}];
    
    // don't try any of this if there isn't any linguists on the roster
    if( Object.entries(roster).length > 0 ){

        // iterate over the array 
        for(var linguist in roster) { // here linguist is the roster key for each linguist
            
            // verify that there is a reading score for the lingusit
            if(roster[linguist].attributes?.hasOwnProperty("listening")){

                // set reading score make sure that score is typed as a Number to facilitate comparision
                let listeningScore = Number(roster[linguist].attributes.listening);
                
                //increment the correct score bucket
                if(listeningScore < 2){
                    scoreBuckets[0].value++;
                }else if(listeningScore === 2){
                    scoreBuckets[1].value++;
                }else if(listeningScore > 2 && listeningScore < 3){
                    scoreBuckets[2].value++;
                }else if(listeningScore > 2.5){
                    scoreBuckets[3].value++;
                }
            }
        }
  }
  
  return scoreBuckets;
}

export default function ListeningScoresChart() {

  const roster = useRecoilValue(rosterState);

  const listeningData = totalScores(roster);

  return (
    <React.Fragment>
      <Title>Listening</Title>
      <ResponsiveContainer>
        <PieChart>
        <Pie
          data={listeningData} 
          //innerRadius={60}
          outerRadius='100%' 
          fill="#8884d8"
          //endAngle={180}
          labelLine={false}
          label={renderCustomizedLabel}
          //paddingAngle={5}
        >
        	{
          	listeningData.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Tooltip />
        <Legend verticalAlign="bottom" height={20}/>
      </PieChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
