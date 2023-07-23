import React from "react";
import "./style.css";

// function Counter(props) {
//   const title = props.title;
//   const initValue = props.initValue;

//  위의 3줄을 아래와 같이 고칠 수 있다

function Counter({ title, initValue }) {
  return (
    <div>
      <h1>{title}</h1>
      <button>+</button>
      {initValue}
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
