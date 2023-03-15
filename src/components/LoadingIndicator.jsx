import React from 'react';
import { CircularProgress, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

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