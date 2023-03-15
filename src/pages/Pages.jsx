import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PublicRepositoriesList from './PublicRepositoriesList';
import UserSelection from './UserSelection';
import {
  isEditingUsername as _isEditingUsername
} from '../store/user/selectors'

export default function Pages() {
  const isEditingUsername = useSelector(_isEditingUsername)
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