export function getUsername(state) {
  return state.user.name;
}

export function isEditingUsername(state) {
  return state.user.isEditing;
}
