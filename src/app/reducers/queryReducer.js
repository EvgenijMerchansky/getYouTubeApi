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
        return elem
      });
      return Object.assign({}, state, {start: false, end: true, error: false, info: wrap});
      case 'DELETE_ITEM':
        const myState = state.info.filter((elem,index) => { // state == my initialState in TOP LINE
          return elem.id != action.payload
        })
        return Object.assign({}, state, {start: false, end: true, error: false, info: myState});
    }
  return state
}
