import React from 'react'
import TodoItem from './TodoItem'
import todoData from './data'

class App extends React.Component{

      state = {
        todos:todoData
      }

handleClick = (id) => {
	this.setState ( prevState => {
		const updatedTodos = prevState.todos.map(todo => {
			if ( todo.id===id ) {
				return { ...todo, completed: !todo.completed }
			} return todo 
		})
		return { todos: updatedTodos }
	})

}

render(){

  const theList = this.state.todos.map(item => <TodoItem key={item.id} item={item} update={this.handleClick} /> )

  return(
    <div>
        <div className="todo-list">
        <h1 className="tag">{`<NB/>`}</h1>
         {theList}
        </div>
    </div>

    )
}


}
export default App