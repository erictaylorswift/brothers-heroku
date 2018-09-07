import React, { Component } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import ColorScheme from 'color-scheme';

class PieGraph extends Component {
  render () {
    let stats = this.props.data;
    let data = [];
    let players = 0;
    function createData(name, values){
      return {name, values};
    };

    if (stats) {
      for (var i = 0; i<stats.length; i++){
        let items = createData(
          stats[i].epicUserHandle,
          Number(stats[i].lifeTimeStats[10].value)
        )
        data.push(items);
        players = players + 1;
      }
      console.log(data)
      console.log(players)
    };

    const scheme = new ColorScheme();

    scheme.from_hue(296)
      .scheme('analogic')
      .add_complement(false)
      .variation('default');

    const colors = scheme.colors();
    console.log(colors);

    return (
      <div>
        <h3>Lifetime Kills </h3>
        <div className='chart-card'>
          <PieChart width={500} height={250} >
            <Pie data={data} cx='50%' cy='50%' outerRadius={125} dataKey='values'>
              {
                data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={'#' + colors[index]}/>
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
