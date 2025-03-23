import { useEffect, useRef } from "react";

function FocusableInput() {
  const inputRef = useRef(null);
  const isMounted = useRef(false);

  useEffect(() => {
    inputRef.current.focus();

    if (!isMounted.current) {
      console.log("montato per la prima volta");
      isMounted.current = true;
    } else {
      console.log("montato per la seconda volta");
    }
  }, []);

  return <input ref={inputRef} type="text" placeholder="Digita qui" />;
}

export default FocusableInput;
