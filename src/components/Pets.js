import { useRef, useState } from "react";
import Cat from "./Cat";
import Dog from "./Dog";

const Pets = () => {
  const [catsInfo, setCatInfo] = useState([
    {
      id: 1,
      name: "Jiggy",
    },
    {
      id: 2,
      name: "Kora",
    },
  ]);

  const [dogsInfo, setDogsInfo] = useState([
    {
      id: 3,
      name: "rascal",
    },
    {
      id: 4,
      name: "bastard",
    },
  ]);
  //create a form the form will have an input for first name and last name.
  const [isDog, setIsDog] = useState(true);

  const [firstName, setFirstName] = useState("");
  const firstNameRef = useRef();

  const [lastName, setLastname] = useState("");
  const lastNameRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastname(lastNameRef.current.value);
  }

  function toggleDog() {
    setIsDog(!isDog);
  }

  return (
    <div>
      {isDog
        ? ""
        : catsInfo.map((kitty) => (
            <Cat key={kitty.id} id={kitty.id} name={kitty.name} />
          ))}
      {isDog
        ? dogsInfo.map((doggy) => (
            <Dog key={doggy.id} id={doggy.id} name={doggy.name} />
          ))
        : ""}
      {isDog.toString()}
      <button
        onClick={toggleDog}
        className="border-2 bg-red-300 hover:bg-orange-200 p-5 py-2"
      >
        Toggle
      </button>
      {firstName + " "}
      {lastName}
      <form onSubmit={handleSubmit}>
        First Name: <input ref={firstNameRef} type="text" />
        <input ref={lastNameRef} type="text" placeholder="last name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Pets;

{
  /*

let props={
  id: 1,
  breed:"bfdb",
  name:"ebzdfb",
  hobby:"dfbdf"
}
*/
}
