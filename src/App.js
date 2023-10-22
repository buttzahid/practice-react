import React  from 'react';
import './App.css'
import Button from './components/Button';
import Counter from './components/Counter';
import InputValue from './components/InputValue';
import PersonList from './components/ObjectList';
import List from './components/List';



function App() {
  return (
    <div className="App">
      <h2>Example: React Props</h2>
      <Button className="Button1" changeHandler={() => alert("Admed Here")} >Ahmed Here <span>HI</span></Button>
      <Button className="Button2" clickHandler={() => alert("Bilal Here")} >Bilal Here</Button>
      <Button className="Button3" clickHandler={() => alert("Zahid Here")} >Zahid Here</Button>
      <h2>Example: React useSate</h2>
    <Counter />
    <InputValue/>
    <h2>Example: Use of map function</h2>
    <List />
    <PersonList/>
    

    </div>
  );
}
export default App;