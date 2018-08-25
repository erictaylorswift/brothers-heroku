import React, { Component } from 'react';
import {BarChart, XAxis, YAxis, Tooltip, Bar, Cell, LabelList } from 'recharts';

class KdChart extends Component {

  render () {
    let stats = this.props.data;
    let data = [];
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
        }
        console.log('data', data)
    };

    const colors = [
      '#8C15E0',
      '#F3CF1A',
      '#178FDB',
      '#FC9225',
      '#6AE2FD'
    ]

    return (
      <div>
        <h3>Lifetime KD Scores</h3>
        <div class='chart-card'>
          <BarChart width={500} height={250} data={data}>
            <XAxis dataKey='user' fontFamily='Source Code Pro, sans serif' fontSize='10' axisLine={false}/>
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
