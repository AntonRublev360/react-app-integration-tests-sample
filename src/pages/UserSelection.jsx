import React from 'react';
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import UserSelectionForm from '../components/UserSelectionForm.container';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2)
  }
}));

export default function UserSelection() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Paper className={classes.paper}>
        <UserSelectionForm />
      </Paper>
    </Container>
  );
}
