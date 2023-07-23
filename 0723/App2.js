import React, { useState } from "react";
import "./style.css";

// function Counter(props) {
//   const title = props.title;
//   const initValue = props.initValue;

//  위의 3줄을 아래와 같이 고칠 수 있다

function Counter({ title, initValue }) {
  // const countState = useState(initValue);
  // const count = countState[0];
  // const setCount = countState[1];

  const [count, setCount] = useState(initValue);
  function up() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={up}>+</button>
      {count}
    </div>
  );
}
export default function App() {
  return (
    <div>
      <Counter title="카운터" initValue={0}></Counter>
    </div>
  );
}
