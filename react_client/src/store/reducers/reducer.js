import {
  SET_EXAMPLE,
} from '../actions/action'


export function exampleState(state = { status: false, data: {} }, action) {

  if (action.type === SET_EXAMPLE) {
    return {
      ...state,
      status: action.data.status,
      data: action.data.data
    }
  } else {
    return state
  }
}
