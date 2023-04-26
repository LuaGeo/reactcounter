const Increment = (props) => {
  return (
  <div className='container'>
    <div>
      <button className={props.counter === 0 ? "hide" : "show"} onClick={() => {props.setCounter(props.counter - 1)}}>-</button>
      <p>{props.counter}</p>
      <button className={props.counter >= 10 ? "hide" : "show"} onClick={() => {props.setCounter(props.counter + 1)}}>+</button>
    </div>
    <button onClick={() => {props.setCounter(0)}}>Reset</button>
  </div>
  )
}

export default Increment