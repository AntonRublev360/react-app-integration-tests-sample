import React, { useMemo } from 'react';
import { Provider } from 'react-redux'
import createStore from '../store/index';

export default function StoreProvider({ children }) {
  /*
    We need to create store once for the rendered app.
    However, in tests the app is rendered multiple times.
    useMemo hook below ensures that store is re-created every time the app is first rendered in the dom
  */
  const store = useMemo(() => createStore(), []);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
