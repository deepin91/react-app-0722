// import './App.css';
import { useState } from "react";
function Counter({ title, initValue }) {
  const [count, setCount] = useState(initValue);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([5, 5]);
  function up() {
    const newCount = count + 1;
    // setCount(count + 1);
    history.push(newCount);
    setHistory(history);
  }
  const stepHandler = (evt) => {
    setStep(Number(evt.target.value));
  };
  //위는 가운데 빈칸 숫자 변경하는 것에 대한 핸들러인듯?
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={up}>+</button>
      <input type="number" value={step} onChange={stepHandler} />
      {count}
      <ol>
        {history.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ol>
    </div>
  );
}
function App() {
  return (
    <div>
      <Counter title="불면증 카운터" initValue={10}></Counter>
    </div>
  );
}

export default App;
