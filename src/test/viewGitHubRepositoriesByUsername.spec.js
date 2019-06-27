import React from 'react';
import {
  render,
  cleanup,
  waitForElement
} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import 'jest-dom/extend-expect';
import nock from 'nock';
import './helpers/initTestLocalization';
import App from '../App';
import {
  FAKE_USERNAME_WITH_REPOS,
  FAKE_USERNAME_WITHOUT_REPOS,
  FAKE_BAD_USERNAME,
  REPOS_LIST
} from './fixtures/github';

describe('view GitHub repositories by username', () => {
  beforeAll(() => {
    nock('https://api.github.com')
      .persist()
      .get(`/users/${FAKE_USERNAME_WITH_REPOS}/repos`)
      .query(true)
      .reply(200, REPOS_LIST)
      .get(`/users/${FAKE_USERNAME_WITHOUT_REPOS}/repos`)
      .query(true)
      .reply(200, [])
      .get(`/users/${FAKE_BAD_USERNAME}/repos`)
      .query(true)
      .reply(404);;
  });

  afterEach(cleanup);

  describe('when GitHub user has public repositories', () => {
    it('user can view the list of public repositories for entered GitHub username', async () => {
      const { getByText, getByPlaceholderText, queryByText } = render(<App />);
      userEvent.type(getByPlaceholderText('userSelection.usernamePlaceholder'), FAKE_USERNAME_WITH_REPOS);
      expect(getByPlaceholderText('userSelection.usernamePlaceholder')).toHaveAttribute('value', FAKE_USERNAME_WITH_REPOS);
      userEvent.click(getByText('userSelection.submitButtonText').closest('button'));
      getByText('repositories.header');
      await waitForElement(() => getByText('repositories.loadingText'));
      expect(queryByText('repositories.empty')).toBeNull();
      await waitForElement(() => REPOS_LIST.reduce((elementsToWaitFor, repository) => {
        elementsToWaitFor.push(getByText(repository.name));
        elementsToWaitFor.push(getByText(repository.description));
        return elementsToWaitFor;
      }, []));
      expect(queryByText('repositories.loadingText')).toBeNull();
      expect(queryByText('repositories.error')).toBeNull();
    });
  });

  describe('when GitHub user has no public repositories', () => {
    it('user is presented with a message that there are no public repositories for entered GitHub username', async () => {
      const { getByText, getByPlaceholderText, queryByText } = render(<App />);
      userEvent.type(getByPlaceholderText('userSelection.usernamePlaceholder'), FAKE_USERNAME_WITHOUT_REPOS);
      expect(getByPlaceholderText('userSelection.usernamePlaceholder')).toHaveAttribute('value', FAKE_USERNAME_WITHOUT_REPOS);
      userEvent.click(getByText('userSelection.submitButtonText').closest('button'));
      getByText('repositories.header');
      await waitForElement(() => getByText('repositories.loadingText'));
      expect(queryByText('repositories.empty')).toBeNull();
      await waitForElement(() => getByText('repositories.empty'));
      expect(queryByText('repositories.error')).toBeNull();
    });
  });

  describe('when GitHub user does not exist', () => {
    it('user is presented with an error message', async () => {
      const { getByText, getByPlaceholderText, queryByText } = render(<App />);
      userEvent.type(getByPlaceholderText('userSelection.usernamePlaceholder'), FAKE_BAD_USERNAME);
      expect(getByPlaceholderText('userSelection.usernamePlaceholder')).toHaveAttribute('value', FAKE_BAD_USERNAME);
      userEvent.click(getByText('userSelection.submitButtonText').closest('button'));
      getByText('repositories.header');
      await waitForElement(() => getByText('repositories.loadingText'));
      expect(queryByText('repositories.empty')).toBeNull();
      await waitForElement(() => getByText('repositories.error'));
      expect(queryByText('repositories.empty')).toBeNull();
    });
  });
});
