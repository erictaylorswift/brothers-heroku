import React, { Component } from 'react';

class UserCard extends Component {

    render(){
        let users = [];
        let stats = this.props.data;
        if (stats){
            for (var i = 0; i < stats.length; i++){
              let userCard =
                <div class='user-wrapper'>
                  <h4>{stats[i].epicUserHandle}</h4>
                  <div class='user-card'>
                    <p>Wins: {stats[i].lifeTimeStats[9].value}</p>
                    <p>Matches played: {stats[i].lifeTimeStats[8].value}</p>
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
