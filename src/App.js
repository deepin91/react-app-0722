// import './App.css';
import { useState, useEffect } from "react";
function Counter({ title, initValue }) {
  const [count, setCount] = useState(initValue);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([5, 5]);
  function up() {
    const newCount = count + step;
    setCount(count + 1); // < 주석처리하면 왜 코드 실행이 안되는가? > 리액트는 원본과 변경된 내용에 대해 비교하는데 원본이 사라졌으므로 안되는 것
    // 그러므로 아래 const newHistory = [...history];와 같이 복사본에 대한 것을 만들고 변경시켜준 뒤 주석처리 한 것 살리면 된다
    const newHistory = [...history];
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

function CounterUseEffect() {
  const [count, setCount] = useState(0);
  console.log('CounterUseEffect', count);
  useEffect(() => {
    setInterval(() => {
      console.log('interval');
      setCount(count + 1); //1초에 한번씩 카운트
    }, 1000);
  }, []);
  // }, [count]); => 이와 같이 사용하면 카운트 값이 바뀔 때만  useEffect 가 실행됨
  //  useEffect를 위와 같이 사용만 하면 컴포넌트가 랜더링 될 때 마다 돌아감
  // 그래서 ,[] 배열을 넣어 한번만 실행하도록 만들어줌

  return (
    <div>
      <h1>useEffect Counter</h1>
      {count}
    </div>
  );
}
function App() {
  return (
    <div>
      <Counter title="불면증 카운터" initValue={10}></Counter>
      <CounterUseEffect></CounterUseEffect>
    </div>
  );
}

export default App;

// 상태의 값이 배열, 객체와 같은 값의 컨테이너인 경우
// 상태를 복제한 후에 데이터를 추가, 수정, 삭제 해야한다.
// 그래야 리액트는 이전의 상태와 이후의 상태가 변경되었다는 것을 알 수 있다.
// 배열의 태그로 만들 때는 map함수를 사용한다. 콜백함수는 2개의 파라미터를 갖는다.
// key값을 제공해야한다. key값은 목록 안 에서만 유일하면 된다.
// set함수의 값은 값일 수도 있고 함수?일 수도 있다.
// closer > 함수가 정의 될 때 그 함수가 사용하는 함수를 가둬두는 것
// useEffect 가 return 값을 가질 수 있음 > but, 그 땐 함수를 사용해야만 가능