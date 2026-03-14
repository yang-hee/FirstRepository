import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let name = "yanghee"
  // 인라인 스타일 코드 -> 해당 파일에서만 사용하고 싶은 스타일의 경우 인라인을 사용할 수도 있다!
  const style = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '30px',
    fontWeight: 'bold',
    padding: '20px',
  }
  return (
    <div className="container">
      <h1 className="head-text">안녕하세요. {name === 'yanghee' ? (<h1>{name}</h1>):null}</h1>
      <h2 style = {style}>인라인 스타일 적용해보기</h2>
    </div>
  );
}


export default App;
