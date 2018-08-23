import React, { Component } from 'react';
import './App.css';
import UserList from './data-source/user-list';

class App extends Component {
    getData = () => {
      fetch('/api/tracker')
        .then(res => res.json())
        .then(data => this.setState(data))
    }

    componentDidMount() {
      this.getData();
    }

  render() {
    let stats = this.state ? this.state.data : null;
    return (
      <div id="root">
          <ul>
              <UserList data={stats}/>
          </ul>
      </div>
    );
  }
}

export default App;
