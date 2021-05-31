import logo from './logo.svg';
import './App.css';
import Cards from "../src/components/Card/Cards";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Hero from "./components/Hero/Hero"

function App() {
  return (
    <div className="App">
      <Hero/>
    <Cards/>
    </div>
  );
}

export default App;
