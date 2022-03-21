import { useLayoutEffect, useEffect, useRef } from "react";

function ComponentLayoutEffect() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div className="App">
      <input ref={inputRef} value="WELCOME" style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default ComponentLayoutEffect;