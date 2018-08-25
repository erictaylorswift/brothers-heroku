import React, { Component } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

class PieGraph extends Component {
  render () {
    let stats = this.props.data;
    let data = [];
    function createData(name, values){
      return {name, values};
    };

    if (stats) {
      for (var i = 0; i<stats.length; i++){
        let items = createData(
          stats[i].epicUserHandle,
          Number(stats[i].lifeTimeStats[10].value)
        )
        data.push(items)
      }
      console.log(data)
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
        <h3>Lifetime Kills </h3>
        <div class='chart-card'>
          <PieChart width={500} height={250} >
            <Pie data={data} cx='50%' cy='50%' outerRadius={125} dataKey='values'>
              {
                data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index]}/>
                ))
              }
            </Pie>
            <Tooltip />
            <Legend layout='vertical' align='right' iconType='circle' verticalAlign='top'/>
          </PieChart>
        </div>
      </div>
    )
  }
}

export default PieGraph;
