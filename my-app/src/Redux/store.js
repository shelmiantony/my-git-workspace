import { createStore } from 'redux';
import todoReducer from './reducers'; // Ensure this path is correct

// Use the Redux DevTools Extension if it's available
const store = createStore(
  todoReducer
);

export default store;
