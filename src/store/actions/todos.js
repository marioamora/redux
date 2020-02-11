export const Type = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  REMOVE_TODO: "REMOVE_TODO"
}

export function addTodo(text){
  return {
    type: Type.ADD_TODO,
    payload: {
      id: Math.random(),
      text
    }
  };
}

export function toggleTodo(id){
  return {
    type: Type.TOGGLE_TODO,
    payload: {
      id
    }
  };
}

export function removeTodo(id){
  return {
    type: Type.REMOVE_TODO,
    payload: {
      id
    }
  };
}