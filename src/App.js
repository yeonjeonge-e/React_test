import { useState } from 'react';
import './App.css';
import Basket from './Basket';

function App() {
  const [value, setValue] = useState(1);

  function plusNumber() {
    setValue(value + 1);
  }

  // return 위의 영역은 자바스크립트 코드를 작성하는 곳이에요

  // return 뒤의 부분이 HTML 작성하는 곳이에요
  // return 뒤의 영역을 JSX 불러요
  // JSX 특징으로는 HTML이랑 유사한데
  // 자바스크립트 코드를 넣을 수 있어요
  // 자바스크립트 코드를 넣으려면 `{ }` 중괄호를 넣고 해야됩니다.
  return (
    <div>
      <h1>여기는 상품목록 페이지입니다.</h1>
      <button onClick={() => plusNumber()}>수량 추가</button>
      <br />
      {value}

      {/* 뒤에 오는 value는 원래 선언된 변수 명 */}
      {/* 앞에 오는 value는 저희가 새로 선언하는 변수 명 */}
      {/* 변수를 넘겨줄 때도 통상적으로 앞에 변수명하고 */}
      {/* 땡겨오는 변수 명을 서로 똑같게 해줘요 보통 거의 다 */}
      <Basket value={value} />
    </div>
  );
}

export default App;