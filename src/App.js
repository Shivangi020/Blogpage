import logo from './logo.svg';
import './App.css';
import Cards from "../src/components/Card/Cards";
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  Hero from "./components/Hero/Hero"
import  Pagination from "./components/page/pagination"

function App() {
  return (
    <div className="App">
    <div>  <Hero/></div>
    <Cards/>
    <Pagination/>
    </div>
  );
}

export default App;
