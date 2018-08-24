import React, { Component } from 'react';
import './App.css';
import KdChart from './components/bar-chart';
import SimpleAppBar from './components/appbar';
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
          <h3>Lifetime KD Scores</h3>
          <KdChart data={stats}/>
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
