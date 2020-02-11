import { Type } from '../actions/todos'

const INITIAL_STATE = [];

export default function todos(state = INITIAL_STATE, action) {
  switch(action.type) {
    case Type.ADD_TODO:
      return [
        ...state,
        { id: action.payload.id, text: action.payload.text, complete: false}
      ];
    case Type.TOGGLE_TODO:
      return state.map(
        todo => todo.id === action.payload.id
                  ? { ...todo, complete: !todo.complete }
                  : todo
      );
    case Type.REMOVE_TODO:
      return state.filter( todo => todo.id !== action.payload.id );
    default:
      return state;
  }
}