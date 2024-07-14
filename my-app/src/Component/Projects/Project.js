import React from 'react'
import Game from '../TicTacToe/Game';
import Todo from '../ToddoApp/Toddo';
function Project() {
  return (<div>
    <h3>Project</h3>
    <p1>TicTacToe:{<Game/>}</p1>
    <p1>ToddoApp:{<Todo/>}</p1>
    </div>  
  )
}

export default Project