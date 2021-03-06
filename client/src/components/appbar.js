import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles ={
    root: {
        flexGrow: 1,
    }
}

function SimpleAppBar(props) {

  let quotes = [
    "Seriously, fuck this game",
    "I'm triggered",
    "This lag tho -- Ambrosiann",
    "Fuck you, Epic",
    "Potato"
  ];

  let randomQuote = quotes[Math.floor(Math.random()*quotes.length)];

  return (
    <div className='appBar'>
      <AppBar position="static" color='primary' className='app-bar'>
        <Toolbar >
            <Typography variant="title" color='inherit' className='bar-text'>
                {randomQuote}
            </Typography>
      </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
