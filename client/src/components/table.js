import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class BorderlessTable extends Component {
  render() {
    let stats = this.props.data;
    let rows = [];
    let id = 0;
    function createData( name, matches, wins, per, kills, kd){
      id +=1;
      return { id, name, matches, wins, per, kills, kd};
    };

    if (stats) {
        for (var i = 0; i<stats.length; i++){
          let soloMatches;
          let soloWins;
          let soloKills;

          if (typeof stats[i].stats.curr_p2 === 'undefined') {
            soloMatches = 0;
          } else {
            soloMatches = stats[i].stats.curr_p2.matches.valueInt;
          };

          if (typeof stats[i].stats.curr_p2 === 'undefined') {
            soloWins = 0;
          } else {
            soloWins = stats[i].stats.curr_p2.top1.value;
          };

          if (typeof stats[i].stats.curr_p2 === 'undefined') {
            soloKills = 0;
          } else {
            soloKills = stats[i].stats.curr_p2.kills.value;
          }

          let items = createData(
            stats[i].epicUserHandle,
            stats[i].stats.curr_p9.matches.valueInt + soloMatches + stats[i].stats.curr_p10.matches.valueInt,
            Number(stats[i].stats.curr_p9.top1.value) + Number(stats[i].stats.curr_p10.top1.value) + Number(soloWins),

            (((
                Number(stats[i].stats.curr_p9.top1.value) + Number(stats[i].stats.curr_p10.top1.value) + Number(soloWins)
            ) / (
                stats[i].stats.curr_p9.matches.valueInt + soloMatches + stats[i].stats.curr_p10.matches.valueInt
            ))*100).toFixed(2),
            Number(stats[i].stats.curr_p9.kills.value) + Number(stats[i].stats.curr_p10.kills.value) + Number(soloKills),

            ((
                Number(stats[i].stats.curr_p9.kills.value) + Number(stats[i].stats.curr_p10.kills.value) + Number(soloKills)
            ) / (
                stats[i].stats.curr_p9.matches.valueInt + soloMatches + stats[i].stats.curr_p10.matches.valueInt
            )).toFixed(2)
          )
          rows.push(items)
        }
        console.log(rows)
    };

    return (
      <div className='table'>
        <h5 className='tableTitle'>Current Season Stats</h5>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Brother</TableCell>
              <TableCell>Matches Played</TableCell>
              <TableCell>Wins</TableCell>
              <TableCell>Win %</TableCell>
              <TableCell>Kills</TableCell>
              <TableCell>K/D</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => {
              return(
                <TableRow key={row.id}>
                  <TableCell className='tableCell' component="th" scope="row" >{row.name}</TableCell>
                  <TableCell className='tableCell' numeric>{row.matches}</TableCell>
                  <TableCell className='tableCell' numeric>{row.wins}</TableCell>
                  <TableCell className='tableCell' numeric>{row.per}</TableCell>
                  <TableCell className='tableCell' numeric>{row.kills}</TableCell>
                  <TableCell className='tableCell' numeric>{row.kd}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default BorderlessTable;
