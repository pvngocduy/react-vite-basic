const TodoData = (props) => {
    return (
        <div className='todo-data'>
          <div className='todo-item'>My name is {props.name}</div>
          <div className='todo-item'>Learning React</div>
          <div className='todo-item'>Learning Front-end</div>
        </div>
    )
}
export default TodoData ;