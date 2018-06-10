import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    backgroundColor: '#FF6978',
    color: '#fff',
    borderRadius: '4px',
    fontWeight: 600,

    '&:hover': {
      backgroundColor: '#C7354C',
    },
  },
});

function CTAButtonRed(props) {
  const { classes } = props;
  return (
    <Button variant="contained" color="primary" className={classes.button}>
      {props.children}
    </Button>
  );
}

CTAButtonRed.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CTAButtonRed);
