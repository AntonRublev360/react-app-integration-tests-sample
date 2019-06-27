import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PublicRepositoriesList from './PublicRepositoriesList.container';
import UserSelection from './UserSelection';

export default function Pages({
  isEditingUsername
}) {
  return (
    <BrowserRouter>
      <Switch>
        {isEditingUsername && (
          <Route
            path="/"
            component={UserSelection}
          />
        )}
        <Route
          path="/"
          component={PublicRepositoriesList}
        />
      </Switch>
    </BrowserRouter>
  );
}

Pages.propTypes = {
  isEditingUsername: PropTypes.bool
};
