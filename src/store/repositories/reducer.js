import ACTION_TYPES from './actionTypes';

const initialState = {
  repositories: [],
  isFetching: true,
  fetchError: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_TYPES.FETCH_REPOSITORIES_START:
      return {
        ...state,
        isFetching: true,
        fetchError: null
      };
    case ACTION_TYPES.FETCH_REPOSITORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        repositories: payload
      };
    case ACTION_TYPES.FETCH_REPOSITORIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        fetchError: payload
      };
    case ACTION_TYPES.CLEAR_REPOSITORIES:
      return {
        ...state,
        repositories: [],
        fetchError: null
      };
    default:
      return state;
  }
}
