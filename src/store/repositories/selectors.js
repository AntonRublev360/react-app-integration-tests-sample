export function getList(state) {
  return state.repositories.repositories;
}

export function isFetching(state) {
  return state.repositories.isFetching;
}

export function hasError(state) {
  return Boolean(state.repositories.fetchError);
}
