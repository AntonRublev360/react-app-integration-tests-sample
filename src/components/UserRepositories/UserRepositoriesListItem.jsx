import React from 'react';
import PropTypes from 'prop-types';
import {
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core';
import { GithubCircle } from 'mdi-material-ui';
import intl from 'react-intl-universal';

export default function PublicRepositoryListItem({
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
            <GithubCircle title={intl.get('repositories.view')} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider component="li" />
    </React.Fragment>
  );
}

PublicRepositoryListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  html_url: PropTypes.string.isRequired
};
