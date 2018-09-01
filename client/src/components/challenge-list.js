import React, { Component } from 'react';

class ChalList extends Component {
  render () {
    let stats = this.props.data;
    let challenges = [];

    if (stats) {
      let res = stats[0].items;

      for (var i = 0; i < res.length - 1; i++) {
        let chalName = res[i].metadata[1].value;
        let chalPic = res[i].metadata[4].value;
        let questTotal = res[i].metadata[3].value;

        let startWord = chalName.split(" ")[0];
        let wordsLeft = chalName.replace(startWord, "");

        let results =
          <div className='user-wrapper'>
            <div className='inline-flex'>
              <h4>Challenge {Number([i]) + 1}</h4>
              <img src={chalPic} className='challenge-icon'/>
            </div>
            <div className='user-card sm-card'>
              <p className='card-text'>{startWord} {questTotal} {wordsLeft}</p>
            </div>
          </div>

          challenges.push(results);
          console.log(wordsLeft)
      }

    };

    return (
      <div className='container'>
        {challenges}
      </div>
    )
  }

}

export default ChalList;
