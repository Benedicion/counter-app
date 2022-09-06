import logo from './logo.svg';
import './App.css';
import Display from './components/display';
import Button from './components/button';



import {useState, UseState} from 'react'

function App()

 {
  const[counter, setCount] =useState(0);
  const [name, setName] = useState('masego');

  var c = 0;
  const changeName= ()=>{

  setName("morongwa")

  }
  const changenum= ()=>{
    setCount(5)

}
const increase = ()=>{
  let sum = counter +1 ;
  setCount (sum);
}

const decrease= ()=>{
let sum = counter -1 ;
setCount (sum);
  }
}
  return (
    <div className="App">

      <Display counter ={counter}/>
      <Button increase={increase}   decrease={decrease}/> 
      <h1>{name}</h1>
      <h1>{counter}</h1>
      <button onClick={changeName}>set name</button>
      <button onClick={changenum}> SET COUNT</button>
    
    </div>
  );
  }

export default App;
