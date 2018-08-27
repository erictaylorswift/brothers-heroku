import React, { Component } from 'react';

class UserCard extends Component {

    render(){
        let users = [];
        let stats = this.props.data;

        if (stats){
            for (var i = 0; i < stats.length; i++){
              let matches= stats[i].lifeTimeStats[7].value;
              let wins = stats[i].lifeTimeStats[8].value;
              let kills = stats[i].lifeTimeStats[10].value;
              let userCard =
                <div class='user-wrapper'>
                  <h4>{stats[i].epicUserHandle}</h4>
                  <div class='user-card'>
                    <div className='list'>
                      <p>Matches played: {matches}</p>
                      <p>Wins: {wins}</p>
                      <p>Kills: {kills}</p>
                    </div>
                  </div>
                </div>

              users.push(userCard);
            }

        };

        return (
            <div class='container'>
              {users}
            </div>
        )
    }
}

export default UserCard;
