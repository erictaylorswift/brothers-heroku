import React, { Component } from 'react';
import './App.css';

class App extends Component {

  getData = () => {
    fetch('/api/tracker')
      .then(res => res.json())
      .then(data => this.setState(data))
  }

  componentWillMount() {
    this.getData();
  }

  render() {
    const stats = this.state;
    console.log(stats)

    return (
      <div id="root">

      </div>
    );
  }
}

export default App;
