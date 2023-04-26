const Increment = (props) => {
  return (
    <div className="container">
      <div>
        <button
          className={props.counter <= 0 ? "hide" : "show"}
          onClick={() => {
            props.setCounter(props.counter - 1);
          }}
        >
          -
        </button>
        <h2>{props.counter}</h2>
        <button
          className={props.counter >= 10 ? "hide" : "show"}
          onClick={() => {
            props.setCounter(props.counter + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        className="reset"
        onClick={() => {
          props.setCounter(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Increment;
