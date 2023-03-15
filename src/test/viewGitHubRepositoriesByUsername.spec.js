import React from 'react';
import {
  screen,
  render,
  cleanup,
  waitFor
} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import './helpers/initTestLocalization';
import App from '../App';
import {
  FAKE_USERNAME_WITH_REPOS,
  FAKE_USERNAME_WITHOUT_REPOS,
  FAKE_BAD_USERNAME,
  REPOS_LIST
} from './fixtures/github';

let user
describe('view GitHub repositories by username', () => {
  beforeEach(() => {
    user = userEvent.setup()
    global.fetch = jest.fn(url => {
      let result = []
      if (url.indexOf('FAKE_USERNAME_WITH_REPOS') > -1)
        result = REPOS_LIST
      if (url.indexOf('FAKE_BAD_USERNAME') > -1)
        return Promise.reject(new Error(404))
      return Promise.resolve({
        json: () => Promise.resolve(result)
      })
    })
    global.fetch.mockClear();
  });

  it('user can view the list of public repositories for entered GitHub username', async () => {
    render(<App />)
    const userName = screen.getByPlaceholderText('userSelection.usernamePlaceholder')
    await user.clear(userName)
    await user.type(userName, FAKE_USERNAME_WITH_REPOS)
    expect(userName).toHaveValue(FAKE_USERNAME_WITH_REPOS);
    user.click(screen.getByText('userSelection.submitButtonText'));
    await screen.findByText('repositories.loadingText')
    await screen.findByText('repositories.header')
    await waitFor(() => REPOS_LIST.reduce((elementsToWaitFor, repository) => {
      elementsToWaitFor.push(screen.getByText(repository.name));
      elementsToWaitFor.push(screen.getByText(repository.description));
      return elementsToWaitFor;
    }, []));
  });

  it('when GitHub user has no public repositories, user is presented with a message that there are no public repositories for entered GitHub username', async () => {
    render(<App />);
    const userName = screen.getByPlaceholderText('userSelection.usernamePlaceholder')
    await user.clear(userName)
    await user.type(userName, FAKE_USERNAME_WITHOUT_REPOS)
    expect(userName).toHaveValue(FAKE_USERNAME_WITHOUT_REPOS);
    user.click(screen.getByText('userSelection.submitButtonText'));
    await screen.findByText('repositories.loadingText')
    await screen.findByText('repositories.header')
    await screen.findByText('repositories.empty')
  });

  it('when GitHub user does not exist user is presented with an error message', async () => {
    render(<App />);
    const userName = screen.getByPlaceholderText('userSelection.usernamePlaceholder')
    await user.clear(userName)
    await user.type(userName, FAKE_BAD_USERNAME)
    expect(userName).toHaveValue(FAKE_BAD_USERNAME);
    user.click(screen.getByText('userSelection.submitButtonText'));
    await screen.findByText('repositories.loadingText')
    await screen.findByText('repositories.header')
    await screen.findByText('repositories.error')
  });
});
