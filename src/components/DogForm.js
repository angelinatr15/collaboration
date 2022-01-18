import { useRef, useState } from "react/cjs/react.development";

const DogForm = () => {
  const [dogAge, setDogAge] = useState("");
  const dogAgeRef = useRef();

  function submitDogForm(event) {
    event.preventDefault();
    console.log("Dog form clicked");
    setDogAge(dogAgeRef.current.value);
  }

  return (
    <div>
      <form onSubmit={submitDogForm}>
        <input ref={dogAgeRef} type="text" placeholder="dog age" />
        <button type="submit">submit</button>

        <h1>Dog Age {dogAge}</h1>
      </form>
    </div>
  );
};

export default DogForm;
