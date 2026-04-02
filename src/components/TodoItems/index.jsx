import './index.css'

const TodoLists = props => {
    const {todoListDetails, deletetitle} = props
    const {id,title} = todoListDetails

    const  onDelete = () => {
        deletetitle(id)
    }

    return (
        <li className='list-container'> 
            <p className='title'>{title}</p>
            <button className='button' type='button' onClick={onDelete}>
                Delete
            </button>
        </li>
    )
}

export default TodoLists