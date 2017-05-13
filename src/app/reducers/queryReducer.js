const initialState = {
  start: false,
  end: false,
  info: [],
  error: false
}

export default function(state=initialState, action){
  switch (action.type) {
    case 'ADD_VALUE':
      const wrap = action.payload.map((elem, index) => {
        return (
          elem
        )
      });
      return Object.assign({}, state, {start: false, end: true, error: false, info: wrap})
    }
  return state
}
