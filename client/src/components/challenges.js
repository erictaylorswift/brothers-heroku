import React, { Component } from 'react';
import '../App.css';
import ChalList from './challenge-list';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from '../theme.js'
import SimpleAppBar from './appbar'

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
      <MuiThemeProvider theme={theme}>
      <div>
        <SimpleAppBar />
        <div className='mainSection'>
          <ChalList data={stats} />
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default Challenges;
