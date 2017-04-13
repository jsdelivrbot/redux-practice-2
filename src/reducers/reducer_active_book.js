export default function (state = null, action) {
  if (action.type) {
    if (action.type == "SELECTED_BOOK") {
      return action.payload
    }
  }

  return state
}
