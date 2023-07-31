import logo from './logo.svg';
import './App.css';
import TACO  from './components/Greet'; //to see why this is named TACO, see Greet.js
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <TACO />
      <Welcome/>
    </div>
  );
}

export default App;
