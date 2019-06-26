export function getList(state) {
  return state.repositories.repositories;
}

export function isFetching(state) {
  return state.repositories.isEditing;
}

export function hasError(state) {
  return state.repositories.fetchError;
}
