import { Component } from "react"
import TodoLists from "../TodoItems"
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]


class SimpleTodo extends Component{
    state= {
        todoItemsList : initialTodosList,
    }

    deletetitle = id => {
        const {todoItemsList} = this.state
        const filteredItemsList = todoItemsList.filter(each => each.id !== id)

        this.setState({
            todoItemsList : filteredItemsList,
        })
    }

    render() {
        const {todoItemsList} = this.state

        return(
            <div className="main-container">
                <ul className="simple-list-container">
                    <h1 className="heading">Simple Todo</h1>
                    {todoItemsList.map(each => (
                        <TodoLists 
                            todoListDetails ={each}
                            key = {each.id}
                            deletetitle = {this.deletetitle}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default SimpleTodo