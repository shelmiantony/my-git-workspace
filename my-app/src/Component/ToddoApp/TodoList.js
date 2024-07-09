import React from 'react'
import {useSelector} from 'react-redux';

const TodoList = () => {
    const filterState = useSelector((state) => {
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm; // Convert searchTerm to lowercase for case-insensitive comparison
    
        return todos.filter((todo) => {
          const matchFilter =
            (filter === 'COMPLETED' && todo.completed) ||
            (filter === 'INCOMPLETE' && !todo.completed) ||
            filter === 'ALL';
    
          const matchSearch = todo.text.toLowerCase().includes(searchTerm); // Correct the typo here
    
          return matchFilter && matchSearch;
        });
        
      });
    
      console.log('filterState: ......>', filterState);
  return (
    <div>TodoList</div>
  )
}

export default TodoList