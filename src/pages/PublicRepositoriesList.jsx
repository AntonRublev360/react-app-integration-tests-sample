import React, { useEffect } from 'react';
import {
  Container,
  Typography
} from '@mui/material'
import { makeStyles } from '@mui/styles';
import intl from 'react-intl-universal';
import LoadingIndicator from '../components/LoadingIndicator';
import UserRepositoriesList from '../components/UserRepositories/UserRepositoriesList';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUsername as _getUsername
} from '../store/user/selectors'
import {
  getList, 
  isFetching as _isFetching,
  hasError as _hasError
} from '../store/repositories/selectors'
import {
  fetchRepositories
} from '../store/repositories/actions'

const useStyles = makeStyles(theme => ({
  header: {
    margin: theme.spacing(3, 0, 2, 0)
  },
  loadingIndicator: {
    margin: 'auto',
    display: 'block'
  }
}));

export default function PublicRepositoriesList() {
  const repositories = useSelector(getList)
  const username = useSelector(_getUsername)
  const isFetching = useSelector(_isFetching)
  const hasError = useSelector(_hasError)
  const dispatch = useDispatch(); 
  const classes = useStyles();
  useEffect(() => {
    const runAsync = async () => {
      await dispatch(fetchRepositories(username))
    };
    runAsync();
  }, []);
  return (
    <Container maxWidth="md">
      <Typography variant="h3" component="h1" >
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

