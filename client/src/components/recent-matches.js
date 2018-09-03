import React, {Component} from 'react';
import Icon from 'react-icons-kit'
import {trophy} from 'react-icons-kit/icomoon/trophy'
import {u1F44E} from 'react-icons-kit/noto_emoji_regular/u1F44E'
import moment from 'moment'


class RecentMatch extends Component {

    render(){
        let recent = [];
        let stats = this.props.data;
        if (stats){
          for (var i = 0; i < stats.length; i++){
            let matches = stats[i].recentMatches[0].playlist;
            let kills = stats[i].recentMatches[0].kills;
            let minutes = stats[i].recentMatches[0].minutesPlayed;
            let score = stats[i].recentMatches[0].score;
            let winner = stats[i].recentMatches[0].top1;
            let gameDate = stats[i].recentMatches[0].dateCollected;
            let gameDay = moment(gameDate).subtract(4, 'hours').format("ddd, h:mmA");

            let results =
              <div className='user-wrapper'>
                <h4>{stats[i].epicUserHandle}</h4>
                <div className='recent-card'>
                  <div className='winner-loser'>
                    {winner > 0 ? <Icon size={28} icon={trophy} /> : <Icon size={28} icon={u1F44E} />}
                    {winner > 0 ? <p> Winner</p> : <p> Loser</p>}
                  </div>
                  <div >
                    <p>
                      {gameDay}
                    </p>
                    <hr className='recentLine' /><br/>
                    <p>
                      Your last match, you spent {minutes} min. playing {matches === 'p10' ? 'Duos' : (matches === 'p9' ? 'Squads' : 'Solos')}.
                      <br/>You got {kills} kills and scored {score} points.
                      <br/>You were a {winner > 0 ? 'winner ' : 'loser ' }.
                    </p>
                  </div>
                </div>
              </div>
            recent.push(results);
          }
            console.log(stats)
        };

        return (
            <div className='container'>
              {recent}
            </div>
        )
    }
}

export default RecentMatch
