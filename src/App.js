import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Friends from './Components/Friends/Friends';
import About from './Components/About/About';
import Details from './Components/Details/Details';

function App() {
  return (
    <div className="App">
      <h1>Welcome To React Routing</h1>
      
      <Header></Header>

      <Routes>
        <Route path='/friend' element={<Friends></Friends>}></Route>

        <Route path='/details/:friendId' element={<Details></Details>}></Route>

        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
