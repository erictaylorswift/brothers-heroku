import React, { Component } from 'react';
import '../App.css';

class Challenges extends Component {
    getData = () => {
      fetch('/api/challenges')
        .then(res => res.json())
        .then(data => this.setState(data))
    }

    componentDidMount() {
      this.getData();
    }

  render() {
    let stats = this.state ? this.state.data : null;
    return (
      <div>
        <p>Here Are Your Challenges</p>
      </div>
    );
  }
}

export default Challenges;
