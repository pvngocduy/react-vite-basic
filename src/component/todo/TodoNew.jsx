const TodoNew = (props) => {
  console.log('>>Check log:',props)
    return (
        <div className='todo-new'>
          <input type="text" ></input>
          <button id='add-btn'>Add</button>
        </div>
    )   
}
export default TodoNew ;