import React, { Component } from 'react';
import './App.css';
import KdChart from './components/bar-chart';
import SimpleAppBar from './components/appbar';
<<<<<<< HEAD
=======
// import UserCard from './components/user-list';
>>>>>>> parent of 591c115... adding back
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from './theme.js'

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
      <MuiThemeProvider theme={theme}>
      <div>
        <SimpleAppBar/>
        <div class="mainSection">
<<<<<<< HEAD
          <h3>Lifetime KD Scores</h3>
          <KdChart data={stats}/>
=======
          <h2>The Brothers</h2>
          <UserCard data={stats}/>
          <div class='container'>
            // <KdChart data={stats}/>
          </div>
>>>>>>> parent of 591c115... adding back
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
