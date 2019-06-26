import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Divider, IconButton, List, ListItem, ListItemText, ListItemSecondaryAction, Typography } from '@material-ui/core';
import { GithubCircle } from 'mdi-material-ui';
import { makeStyles } from '@material-ui/styles';
import intl from 'react-intl-universal';

const useStyles = makeStyles(theme => ({
  header: {
    margin: theme.spacing(3, 0, 2, 0)
  },
  list: {

  },
  listItemHeader: {
    display: 'flex'
  }
}));

export default function PublicRepositoriesList({
  repositories,
  fetchRepositories,
  username
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
      <List className={classes.list}>
        {repositories.map(repository => (
          <PublicRepositoryListItem {...repository} key={repository.id} />
        ))}
      </List>
    </Container>
  );
}

function PublicRepositoryListItem({
  name,
  description,
  html_url
}) {
  return (
    <React.Fragment>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={name}
          secondary={description}
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label={intl.get('repositories.view')}
            href={html_url}
            target="_blank"
          >
            <GithubCircle />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider component="li" />
    </React.Fragment>
  );
}

PublicRepositoriesList.propTypes = {
  repositories: PropTypes.array,
  username: PropTypes.string.isRequired,
  fetchRepositories: PropTypes.func.isRequired
};

PublicRepositoriesList.defaultProps = {
  repositories: []
};
