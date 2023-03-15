import React, { useState } from 'react';
import { Button, Grid, TextField, InputAdornment } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Github } from 'mdi-material-ui';
import intl from 'react-intl-universal';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUsername
} from '../store/user/selectors'
import {
  setUsername
} from '../store/user/actions'

const GitHubUserInputProps = {
  startAdornment: (
    <InputAdornment position="start">
      <Github />
    </InputAdornment>
  ),
};

const useStyles = makeStyles(theme => ({
  button: {
    marginTop: theme.spacing(1)
  }
}));

export default function UserSelectionForm() {
  const username = useSelector(getUsername)
  const dispatch = useDispatch();  
  const classes = useStyles();
  const [newUsername, setNewUsername] = useState(username);

  const handlenewUsernameChange = (e) => {
    setNewUsername(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUsername(newUsername))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center">
        <Grid item xs={12}>
          <TextField
            label={intl.get('userSelection.usernameLabel')}
            placeholder={intl.get('userSelection.usernamePlaceholder')}
            InputProps={GitHubUserInputProps}
            required
            fullWidth
            value={newUsername}
            onChange={handlenewUsernameChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            fullWidth
          >
            {intl.get('userSelection.submitButtonText')}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}