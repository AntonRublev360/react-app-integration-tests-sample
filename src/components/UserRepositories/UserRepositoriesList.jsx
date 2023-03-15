import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Typography
}  from '@mui/material';
import intl from 'react-intl-universal';
import UserRepositoriesListItem from './UserRepositoriesListItem';

export default function UserRepositoriesList({
  repositories,
  isFetching,
  hasError
}) {
  if (hasError) {
    return (
      <Typography variant="body1" color="error">
        {intl.get('repositories.error')}
      </Typography>
    );
  }
  return (
    <List>
      {!isFetching && repositories.length === 0 && (
        <ListItem alignItems="flex-start">
          <ListItemText
            primary={intl.get('repositories.empty')}
          />
        </ListItem>
      )}
      {repositories.map(repository => (
        <UserRepositoriesListItem {...repository} key={repository.id} />
      ))}
    </List>
  );
}
