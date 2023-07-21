import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [좋아요, 좋아요변경] = useState(0);
  let [modal, setModal] = useState(false);

  function like() {
     alert("좋아요 감사합니다");
     좋아요변경(좋아요+1);
  }

  function change() {
     let copy = [...글제목];
     copy[0] = '여자 코트 추천';
     글제목변경(copy);
  }

  function sort() {
    let copy = [...글제목];
    copy.sort();
    글제목변경(copy);
  }

  function Modal() {
    return (
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    )
  }

  return (
    <div className="App">
     
      <div className="black-nav">
        <h4>React Blog</h4>
      </div> 

      <button onClick={ change }>button</button>
      <button onClick={ sort }>가나다 순 정렬</button>
      
      {/* <div className='list'>
        <h4>{글제목[0]} <span onClick={ like }>👍</span> {좋아요} </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
     
      <div className='list'>
        <h4 onClick={()=>{ setModal(!modal) }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function( a ) {
          return (
          <div className="list">
            <h4>{ a }</h4>
            <p>2월 17일 발행</p>
          </div>
          )
        })
      }

      {
        modal == true ? <Modal></Modal> : null
      }

    </div>
  );  
}
export default App;
