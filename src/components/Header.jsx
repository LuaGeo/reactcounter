const Header = (props) => {
  return (
    <header>
      <div className="containerHead">
        <img src={props.calc} alt="" />
        <h1>React Counter</h1>
      </div>
    </header>
  );
};

export default Header;
