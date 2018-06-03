import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
};

function AppBarNav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div variant="title" color="inherit" className={classes.flex} />
          <Button color="inherit">Nav Links</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppBarNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarNav);