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
  const [step, setStep] = useState(1);
  function up() {
    setCount(count + step);
  }
  // function down() {
  //   setCount(count - 1);
  // }
  // function plus10() {
  //   setCount(count + 10);
  // }
  // function minus10() {
  //   setCount(count - 10);
  // }
  return (
    <div>
      <h1>{title}</h1>
      {/* <button onClick={down}>-</button> */}
      <input
        type="number"
        value={step}
        onChange={(e) => {
          console.log("change", e.target.value);
          setStep(Number(e.target.value));
          // setStep(e.target.value);를 그냥 쓰면 문자열이라 ㄴㄴ임 위 같이 써서 숫자로 바꿔줌
        }}
      />
      <button onClick={up}>+</button>
      <br />
      {/* <button onClick={minus10}>-10</button>
      <button onClick={plus10}>+10</button> */}
      <br />
      <p>total : {count}</p>
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
