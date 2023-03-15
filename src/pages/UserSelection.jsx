import React from 'react';
import { Container, Paper }  from '@mui/material'
import { makeStyles } from '@mui/styles';
import UserSelectionForm from '../components/UserSelectionForm';

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