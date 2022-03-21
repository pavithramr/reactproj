import React, { useState } from "react";

const ComponentUseState = () => {
  const [inputValue, setInputValue] = useState("Pavithra");
  //const [counter, setCounter] = useState("0");

  let onChange = (event) => {
    const newValue = event.target.value; 
    setInputValue(newValue); //const increment = () => { setCounter(counter + 1); };
  };

  return (
    <div>
      <input placeholder="Enter Something..." onChange={onChange} />
      {inputValue}
    </div>    /* <div> {counter}<button onClick={increment}>Increment</button></div> */
  );
};

export default ComponentUseState;