// a ruducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

// don't modify old state! return the copy, obect spread takes a copy of the element

export default function posts(state = [], action) {
  // console.log(state, action);
  switch(action.type) {
    case 'INCREMENT_LIKES':
      console.log('INCREMENT_LIKES');
      const i = action.index;
      return [
        ...state.slice(0,i), //before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), //before the one we are updating
      ]
    default:
      return state;
  }
}
