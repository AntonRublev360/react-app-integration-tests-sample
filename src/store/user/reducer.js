import ACTION_TYPES from './actionTypes';

const initialState = {
  name: 'AntonRublev360',
  isEditing: true
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ACTION_TYPES.SET_NAME:
      return {
        ...state,
        name: payload,
        isEditing: false
      };
    case ACTION_TYPES.SET_EDITING_NAME:
      return {
        ...state,
        isEditing: payload
      };
    default:
      return state;
  }
}
