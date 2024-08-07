import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className=" flex flex-col bg-pink-400">
      {count}
      <button onClick={() => setCount(count - 1)}>Decrese</button>

      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>Increse</button>
    </div>
  );
};

export default Counter;
