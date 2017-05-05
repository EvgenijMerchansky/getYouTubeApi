const initialState = {
  start: false,
  end: false,
  offices: []
}

export default function(state=initialState, action){
  switch (action.type) {
    case 'GET_OFFICES':
      return Object.assign({},state , {offices: action.payload})
    case 'GET_OFFICES_FULFILLED':
      return Object.assign({},state , {start: false ,end: true})
      break
  }
  return state
}
