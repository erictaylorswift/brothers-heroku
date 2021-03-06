import React, { Component } from 'react';
import './App.css';
import KdChart from './components/bar-chart';
import UserCard from './components/user-list';
import PieGraph from './components/pie-chart';
import BorderlessTable from './components/table';
import RecentMatch from './components/recent-matches';
import SimpleAppBar from './components/appbar';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from './theme.js'
import { connect, PromiseState } from 'react-refetch'

import challenges from './assets/challenges.png'

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
        <div className="mainSection">
          <a href='/challenges'>
            <img src={challenges} className='top-btn' alt=''/>
          </a>
          <UserCard data={stats}/>
          <div className='container'>
            <KdChart data={stats}/>
            <PieGraph data={stats}/>
          </div>
          <BorderlessTable data={stats}/>
          <h5 className='tableTitle'>Most Recent Match</h5>
          <RecentMatch data={stats} />
        </div>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
// export default connect(props => ({
//   stats: { url: '/api/tracker', refreshInterval: 60000 }
// }))(App);
