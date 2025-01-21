import React, { useState, useMemo } from "react";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState({
    name:"",
    phone:""
  });

  const expensiveComputation = useMemo(() => {
    console.log("Running expensive computation...");
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
      total += i;
    }
    return total;
  }, []);

  return (
    <div>
      <h1>With useMemo</h1>
      <p>Result of expensive computation: {expensiveComputation}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count: {count}</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
    </div>
  );
};

export default Memo;
