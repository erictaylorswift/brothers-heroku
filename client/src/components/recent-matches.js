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
            let matches = stats[i].recentMatches[0].playlist;
            let kills = stats[i].recentMatches[0].kills;
            let minutes = stats[i].recentMatches[0].minutesPlayed;
            let score = stats[i].recentMatches[0].score;
            let winner = stats[i].recentMatches[0].top1;

            let results =
              <div className='user-wrapper'>
                <h4>{stats[i].epicUserHandle}</h4>
                <div className='recent-card'>
                {winner > 0 ? <Icon icon={trophy} /> : <Icon icon={bin} />}
                  <div >
                    <p>
                      Your last match, you spent {minutes} min. playing {matches === 'p10' ? 'Duos' : (matches === 'p9' ? 'Squads' : 'Solos')}.
                      <br/>You got {kills} kills and scored {score} points.
                      <br/>You were a {winner > 0 ? 'winner ' : 'loser ' }.
                    </p>
                  </div>
                </div>
              </div>
            recent.push(results);
            console.log(matches)
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
