// actions.js
import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
  ADD_COUNTER,
  INCREMENT,
  DECREMENT,
  RESET,
  REMOVE_COUNTER,
} from './actionType';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: { id },
});

export const markCompleted = (id) => ({
  type: MARK_COMPLETED,
  payload: { id },
});

export const markIncomplete = (id) => ({
  type: MARK_INCOMPLETE,
  payload: { id },
});

export const filterTodos = (filter) => ({
  type: FILTER_TODOS,
  payload: { filter },
});

export const markAllCompleted = () => ({
  type: MARK_ALL_COMPLETED,
});

export const updateSearchTerm = (searchTerm) => ({
  type: UPDATE_SEARCH_TERM,
  payload: { searchTerm },
});

export const addCounter = () => ({
  type: ADD_COUNTER,
});
export const increment = (id) => ({
  type: INCREMENT,
  payload: id,
});
export const decrement = (id) => ({
  type: DECREMENT,
  payload: id,
});
export const reset = (id) => ({
  type: RESET,
  payload: id,
});
export const removeCounter = (id) => ({
  type: REMOVE_COUNTER,
  payload: id,
});
