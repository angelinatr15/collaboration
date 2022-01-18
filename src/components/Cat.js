const Cat = (props) => {
  return (
    <div>
      {/*  I expect a property called props in the prosp object*/}
      <p> id:{props.id} </p>
      <p>name:{props.name} </p>
    </div>
  );
};

export default Cat;
