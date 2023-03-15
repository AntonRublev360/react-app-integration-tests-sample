import React from 'react';
import {
  Divider,
  IconButton,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from '@mui/material';
import { Github } from 'mdi-material-ui';
import intl from 'react-intl-universal';

export default function PublicRepositoryListItem({
  name,
  description,
  html_url
}) {
  return (
    <>
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
            <Github title={intl.get('repositories.view')} />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider component="li" />
      </>
  );
}