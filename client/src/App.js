import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = { data: [] }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch('/api/tracker')
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    return (
      <div id="root">
          {data[0]}
      </div>
    );
  }
}

export default App;
