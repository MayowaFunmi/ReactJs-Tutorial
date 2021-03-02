import { React } from "react";
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";


//function App() {
//  return (
//    <div className="App">
//      <Greet />
//    </div>
//  );
//}

// Using arrow function

const App = () => {
  return (
    <div className='App'>
      <Counter />
      <Message />
      <Greet name='Bruce' heroName='Batman'>
        <p>This is Children props</p>
      </Greet>
      <Greet name='Clark' heroName='Superman'>
        <button>Action</button>
      </Greet>
      <Greet name='Diana' heroName='Wonder Woman' />
      <Welcome name='Tunmise' heroName='Tumighty' />
      <Welcome name='Israel' heroName='Musician' />
      <Welcome name='Mayowa' heroName='Mayor' />
      <Hello />
    </div>
  )
}

export default App;
