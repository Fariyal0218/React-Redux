import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import AddCounter from './AddCounter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <div className="App">
      {/* <Counter/>
      <AddCounter/> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/counter' element={<Counter/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
