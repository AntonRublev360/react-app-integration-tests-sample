import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

export default function LoadingIndicator({
  isLoading,
  text,
  ...rest
}) {
  const classes = useStyles();
  if (!isLoading) {
    return null;
  }
  return (
    <div  {...rest} className={classes.container}>
      <CircularProgress />
      <Typography variant="body1">
        {text}
      </Typography>
    </div>
  );
}

LoadingIndicator.propTypes = {
  isLoading: PropTypes.bool,
  text: PropTypes.node
};

LoadingIndicator.defaultProps = {
  isLoading: false
};
