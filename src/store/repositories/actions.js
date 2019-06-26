import ACTION_TYPES from './actionTypes';
import { getUserRepos } from '../../services/github';

export function fetchRepositories(username) {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPES.FETCH_REPOSITORIES_START
    });
    try {
      const repositories = await getUserRepos(username);
      dispatch({
        type: ACTION_TYPES.FETCH_REPOSITORIES_SUCCESS,
        payload: repositories
      });
    } catch (err) {
      dispatch({
        type: ACTION_TYPES.FETCH_REPOSITORIES_FAILURE,
        payload: err
      });
    }
  };
}

export function clearRepositories() {
  return {
    type: ACTION_TYPES.CLEAR_REPOSITORIES,
  };
}
