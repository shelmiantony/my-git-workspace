// reducers.js
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

const initialState = { todos: [], filter: 'ALL', searchTerm: '', counter: [] };

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          { text: action.payload.text, completed: false },
        ],
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case TOGGLE_TODO:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case REMOVE_TODO:
      return {
        todos: state.todos.filter((todo, index) => index !== action.payload.id),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case MARK_COMPLETED:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: true } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case MARK_INCOMPLETE:
      return {
        todos: state.todos.map((todo, index) =>
          index === action.payload.id ? { ...todo, completed: false } : todo
        ),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };

    case FILTER_TODOS:
      return {
        todos: state.todos,
        filter: action.payload.filter,
        searchTerm: state.searchTerm,
      };

    case UPDATE_SEARCH_TERM:
      return {
        todos: state.todos,
        filter: state.filter,
        searchTerm: action.payload.searchTerm,
      };

    case MARK_ALL_COMPLETED:
      return {
        todos: state.todos.map((todo) => ({ ...todo, completed: true })),
        filter: state.filter,
        searchTerm: state.searchTerm,
      };
    case ADD_COUNTER:
      return {
        ...state,
        counter: [...state.counter, { id: Date.now(), value: 0 }],
      };
    case INCREMENT:
      return {
        ...state,
        counter: state.counter.map((counter) =>
          counter.id === action.payload
            ? { ...counter, value: counter.value + 1 }
            : counter
        ),
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter.map((counter) =>
          counter.id === action.payload
            ? { ...counter, value: counter.value - 1 }
            : counter
        ),
      };
    case RESET:
      return {
        ...state,
        counter: state.counter.map((counter) =>
          counter.id === action.payload ? { ...counter, value: 0 } : counter
        ),
      };
    case REMOVE_COUNTER:
      return {
        ...state,
        counter: state.counter.filter(
          (counter) => counter.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
