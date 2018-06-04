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
  bar: {
    background:
      'linear-gradient(113.33deg, #c4c4c4 0%, #058ed9 0.01%,#0069c0 100%)',
    boxShadow: '0 0 0 0',
  },
  navButton: {
    background: 'rgba(110, 198, 255, 0.38)',
    marginLeft: '1rem',
    marginRight: '1rem',
    fontWeight: 600,
    borderRadius: '4px',
  },
};

function AppBarNav(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <div variant="title" color="inherit" className={classes.flex} />
          <Button color="inherit" className={classes.navButton}>
            Home
          </Button>
          <Button color="inherit" className={classes.navButton}>
            Coaching Staff
          </Button>
          <Button color="inherit" className={classes.navButton}>
            Clinics
          </Button>
          631-494-5040
        </Toolbar>
      </AppBar>
    </div>
  );
}

AppBarNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarNav);
