import "./App.css";
import { useState } from "react";

function Counter(props) {
  let countState = useState(props.initValue); //let 지역변수
  let count = countState[0];
  let setCount = countState[1];

  let countState2 = useState(props.initValue);
  let countDown = countState2[0];
  let setCountDown = countState2[1];
  console.log(countState);
  function up() {
    console.log(countState);
    setCount(count + 1);
  }
  function down() {
    setCountDown(count - 1);
  }
  /* console.log(props);  자바스크립트 에서는 콘솔에 props(매개변수)값이 찍히게 함*/
  return (
    <div>
      {/* <h1>카운터</h1>  - 텍스트가 아닌 함수형으로 불러오려면 */}
      <h1>{props.title}</h1>
      {/* <button onClick={up}>+</button> {props.initValue} 사용자 정의 내 컴포넌트 속성 불러오는 방법 */}
      <button onClick={up}>+</button> {count}
      <button onClick={down}>-</button> {countDown}
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter title="불면증 카운터" initValue={10}></Counter>
      {/* <Counter title="손님 카운터" initValue={10}></Counter> */}
      {/*props 중괄호 안에 값을 넣으면 js의 데이터 타입으로 주입, 출력.
      ""사용 시 문자열로 인식. 함수의 리턴값에서 중괄호 사용하면 변수로 간주함.*/}
    </div>
  );
}

export default App;
