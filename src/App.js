//import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet'; //to see why this is named TACO, see Greet.js
//import Welcome from './components/Welcome';
//import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';


function App() {
  return (
    <div className="App">
      {/* <Message/> */}
      <Counter/>
      {/*<Greet name="Bruce" heroName="Batman"> 
        <p>This is children props</p> 
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
      </Greet>
      <Greet name="Diana" heroName="Wonder Woman"/>
      
      <Welcome name="Bruce" heroName="Batman"/>
      <Welcome name="Clark" heroName="Superman"/>
      <Welcome name="Diana" heroName="Wonder Woman"/>
      <Hello/> */}
    </div>
  );
}

export default App;
