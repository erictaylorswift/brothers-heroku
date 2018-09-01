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
  const { classes } = props;
  return (
    <div className='appBar'>
      <AppBar position="static" color='primary' className='app-bar'>
        <Toolbar >
            <Typography variant="title" color='inherit' className='bar-text'>
                Brothers Tracker
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
