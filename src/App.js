import './App.css';
import { useState } from 'react';

function App() {
  let [value, setValue] = useState(50);
  function Down(v) {
    if (v === 450) {
      setValue(50)
      let elem = document.getElementById('box')
      elem.style.top = "50px";
    }
    else{
      let position = value + 50;
      setValue(position)
      let elem = document.getElementById('box')
      elem.style.top = position + 'px';
      console.log('clickd')
    }
  }
  function Up(v) {
    if (v ===50) {
      setValue(50)
      let elem = document.getElementById('box')
      elem.style.top = "50px";
    }
    else{
      let position = value - 50;
      setValue(position)
      let elem = document.getElementById('box')
      elem.style.top = position + 'px';
      console.log('clickd')
    }
  }
  function Left(v) { 
    if (v ===50) {
      setValue(50)
      let elem = document.getElementById('box')
      elem.style.left = "50px";
    }
    else{
      let position = value - 50;
      setValue(position)
      let elem = document.getElementById('box')
      elem.style.left = position + 'px';
      console.log('clickd')
    }
  }
  function Right(v) {
    if (v ===400) {
      setValue(50)
      let elem = document.getElementById('box')
      elem.style.left = "50px";
    }
    else{
      let position = value + 50;
      setValue(position)
      let elem = document.getElementById('box')
      elem.style.left = position + 'px';
      console.log('clicked')
    }
  }
  return (
    <div className="App">
      <div className='field'>
        <div id='up'><button onClick={()=>Up(value)}>up</button></div>
        <div id='left'><button onClick={()=>Left(value)}>left</button></div>
        <div id='right'><button onClick={()=>Right(value)}>right</button></div>
        <div id='down'><button onClick={()=>Down(value)}>down</button></div>
        <div id='box'></div>
      </div>
    </div>
  );
}

export default App;
