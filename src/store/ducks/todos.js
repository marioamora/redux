import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addTodo: (text) => ({ type:'ADD_TODO', id: Math.random(), text, complete: false}),
  toggleTodo: ['id'],
  removeTodo: ['id']
});

const INITIAL_STATE = [];

const add = (state = INITIAL_STATE, action) => [
  ...state,
  { id: action.id, text: action.text, complete: false}
];

const toggle = (state = INITIAL_STATE, action) => state.map(
  todo => todo.id === action.id
            ? { ...todo, complete: !todo.complete }
            : todo
);

const remove = (state = INITIAL_STATE, action) => state.filter( todo => todo.id !== action.id );

const HANDLERS = {
  [Types.ADD_TODO]: add,
  [Types.TOGGLE_TODO]: toggle,
  [Types.REMOVE_TODO]: remove
}

export default createReducer(INITIAL_STATE, HANDLERS);