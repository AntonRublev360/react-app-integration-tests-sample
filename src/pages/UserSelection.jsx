import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Grid, Paper, TextField, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { GithubCircle } from 'mdi-material-ui';
import intl from 'react-intl-universal';

const GitHubUserInputProps = {
  startAdornment: (
    <InputAdornment position="start">
      <GithubCircle />
    </InputAdornment>
  ),
};

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(1)
  }
}));

export default function UserSelection({
  username,
  setUsername,
  setIsEditingUsername
}) {
  const classes = useStyles();
  const [newUsername, setNewUsername] = useState(username);
  const handlenewUsernameChange = (e) => {
    const value = e.target.value;
    setNewUsername(value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(newUsername);
  }
  return (
    <Container maxWidth="sm">
      <Paper className={classes.paper}>
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
      </Paper>
    </Container>
  );
}

UserSelection.propTypes = {
  username: PropTypes.string,
  setUsername: PropTypes.func.isRequired
};
