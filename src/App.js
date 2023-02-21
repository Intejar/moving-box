import logo from './logo.svg';
import './App.css';

function App() {
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
