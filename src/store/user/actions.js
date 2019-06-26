import ACTION_TYPES from './actionTypes';

export function setUsername(payload) {
  return {
    type: ACTION_TYPES.SET_NAME,
    payload
  };
}

export function setIsEditingUsername(payload) {
  return {
    type: ACTION_TYPES.SET_EDITING_NAME,
    payload
  };
}
