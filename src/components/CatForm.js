import { useRef, useState } from "react/cjs/react.development";

const CatForm = () => {
  const [catAge, setCatAge] = useState("");
  const catAgeRef = useRef();

  function submitForm(event) {
    event.preventDefault();
    console.log("clicked");
    setCatAge(catAgeRef.current.value);
  }

  const [catComment, setCatComment] = useState("");
  const catCommentRef = useRef();

  function submitCatComment(event) {
    event.preventDefault();
    console.log("comment clicked");
    setCatComment(catCommentRef.current.value);
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <input ref={catAgeRef} type="text" placeholder="cat age" />
        <button type="submit">submit</button>
      </form>
      <h1> {catAge}</h1>

      <form onSubmit={submitCatComment}>
        <input ref={catCommentRef} type="text" placeholder="comment" />
        <button type="submit">submit</button>
        <h1>comment here: {catComment}</h1>
      </form>
    </div>
  );
};

export default CatForm;
