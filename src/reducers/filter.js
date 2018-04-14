const CHANGE_KEYWORD = 'CHANGE_KEYWORD';

export default function(state = '', action) {
  switch(action.type) {
    case CHANGE_KEYWORD:
      return action.payload;
    default:
      return state;
  }
}
