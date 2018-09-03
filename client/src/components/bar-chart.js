import React, { Component } from 'react';
import {BarChart, XAxis, YAxis, Tooltip, Bar, Cell, LabelList } from 'recharts';
import randomColor from 'randomcolor';

class KdChart extends Component {

  render () {
    let stats = this.props.data;
    let data = [];
    let players = 0;
    function createData(user, kd){
      return {user, kd};
    };

    if (stats) {
        for (var i = 0; i<stats.length; i++){
          let items = createData(
            stats[i].epicUserHandle,
            Number(stats[i].lifeTimeStats[11].value)
          )
          data.push(items)
          players = players + 1;
        }
    };

    const colors =randomColor({
      count: players,
      hue: '#D5992B'
    })

    return (
      <div className='barChartCard'>
          <h3>Lifetime KD Scores</h3>
        <div className='chart-card'>
          <BarChart width={600} height={300} data={data}>
            <XAxis dataKey='user' fontFamily='Source Code Pro, sans serif' fontSize='4' axisLine={false}/>
            <YAxis hide/>
            <Tooltip />
            <Bar dataKey='kd'>
              {
                data.map((entry, index) => (
                  <Cell key={`cell-${index}`} stroke={colors[index]} strokeWidth='4' fill='none'/>
                ))
              }
              <LabelList dataKey='kd' position="insideTop" fill='#393939' stroke='none'/>
            </Bar>
          </BarChart>
        </div>
      </div>
    )
  }
}

export default KdChart;
