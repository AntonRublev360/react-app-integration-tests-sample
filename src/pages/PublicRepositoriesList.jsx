import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import intl from 'react-intl-universal';
import LoadingIndicator from '../components/LoadingIndicator';
import UserRepositoriesList from '../components/UserRepositories/UserRepositoriesList';

const useStyles = makeStyles(theme => ({
  header: {
    margin: theme.spacing(3, 0, 2, 0)
  },
  loadingIndicator: {
    margin: 'auto',
    display: 'block'
  }
}));

export default function PublicRepositoriesList({
  repositories,
  fetchRepositories,
  username,
  isFetching,
  hasError
}) {
  const classes = useStyles();
  useEffect(() => {
    fetchRepositories(username);
  }, [username, fetchRepositories]);
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" className={classes.header}>
        {intl.get('repositories.header', { username })}
      </Typography>
      <LoadingIndicator
        className={classes.loadingIndicator}
        isLoading={isFetching}
        text={intl.get('repositories.loadingText')}
      />
      <UserRepositoriesList
        repositories={repositories}
        username={username}
        isFetching={isFetching}
        hasError={hasError}
      />
    </Container>
  );
}

PublicRepositoriesList.propTypes = {
  repositories: PropTypes.array,
  username: PropTypes.string.isRequired,
  fetchRepositories: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  hasError: PropTypes.bool
};

PublicRepositoriesList.defaultProps = {
  repositories: []
};
