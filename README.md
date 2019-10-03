# react-app-integration-tests-sample
Sample integration tests implementation for a common react app structure

[Read more about the the project and reasoning here.](https://www.toptal.com/react/react-testing-library-tutorial)

## App implementation details

Goal of the app implementation is follow a common react app structure and patterns while keeping it simple and small for ease of reading and understanding.

The app implements a simple use case:
1. User enters a GitHub username
2. App displays a list of public repositories associated with the entered username

The app includes:

 - API requests ([axios](https://github.com/axios/axios))
 - Internationalization support ([react-intl-universal](https://github.com/alibaba/react-intl-universal))
 - Global state management ([redux](https://github.com/reduxjs/redux) + [redux-thunk](https://github.com/reduxjs/redux-thunk))
 - CSS in JS solution ([@material-ui/styles](https://material-ui.com/styles/basics/))
 - SPA routing ([react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom))

The project was bootstrapped with [Create React App](./README.CRA.md).

## Integration tests

Integration tests are written from User perspective and ignore as much of implementation details as possible.
Instead, tests assert that user can interact with the DOM to fulfill a certain scenario.

Integration tests are written using:

 - [jest](https://github.com/facebook/jest): JavaScript testing framework
 - [react-testing-library](https://github.com/testing-library/react-testing-library): Simple and complete React DOM testing utilities that encourage good testing practices.
 - [jest-dom](https://github.com/testing-library/jest-dom): Custom jest matchers to test the state of the DOM.
 - [nock](https://github.com/nock/nock): HTTP server mocking and expectations library.

