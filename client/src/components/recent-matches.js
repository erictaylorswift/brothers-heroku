import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from 'react-icons-kit'
import {trophy} from 'react-icons-kit/icomoon/trophy'
import {bin} from 'react-icons-kit/icomoon/bin'

class RecentMatch extends Component {

    render(){
        let recent = [];
        let stats = this.props.data;

        if (stats){
          for (var i = 0; i < stats.length; i++){

            function addZero(m) {
              if ( m < 10 ) {
                m = "0" + m;
              }
              return m;
            }

            function est(tz) {
              if ( tz < 12 ) {
                tz = (tz + 12) - 4;
              }
              return tz
            }

            function twelveHour(h) {
              if ( h > 12 ) {
                h = h - 12;
              }
              return h;
            }

            let matches = stats[i].recentMatches[0].playlist;
            let kills = stats[i].recentMatches[0].kills;
            let minutes = stats[i].recentMatches[0].minutesPlayed;
            let score = stats[i].recentMatches[0].score;
            let winner = stats[i].recentMatches[0].top1;
            let gameDate = new Date(stats[i].recentMatches[0].dateCollected);
            let gameEST = est(gameDate.getHours());
            let gameHours = twelveHour(gameEST);
            let gameMin = addZero(gameDate.getMinutes());
            let gameTime = gameHours + ":" + gameMin + " EST";
            let gameDay = gameDate.toString().split(" ")[0];

            let results =
              <div className='user-wrapper'>
                <h4>{stats[i].epicUserHandle}</h4>
                <div className='recent-card'>
                {winner > 0 ? <Icon icon={trophy} /> : <Icon icon={bin} />}
                  <div >
                    <p>
                      {gameDay + " at " + gameTime}
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
            console.log(gameDay.split(" ")[0])
          }

        };

        return (
            <div class='container'>
              {recent}
            </div>
        )
    }
}

export default RecentMatch
