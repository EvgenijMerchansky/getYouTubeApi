const initialState = {
  start: false,
  end: false,
  info: [],
  error: false
}

export default function(state=initialState, action){
  switch (action.type) {
    case 'ADD_VALUE':
      return Object.assign({}, state, {start: true, end: false, error: false, info: action.payload})
  }
  return state
}
