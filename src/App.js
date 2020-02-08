import React from "react";
import { Provider } from "react-redux";
import TodoList from "./TodoList";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <TodoList/>
    </Provider>
  );
}

export default App;
