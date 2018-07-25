import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    backgroundColor: '#058ED9',
    color: '#fff',
    borderRadius: '4px',
    fontWeight: 600,

    '&:hover': {
      backgroundColor: '#0061A7',
    },
  },
});

function CTAButtonBlue(props) {
  const { classes } = props;
  return (
    <Button variant="contained" color="primary" className={classes.button}>
      {props.children}
    </Button>
  );
}

CTAButtonBlue.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CTAButtonBlue);
