import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import NavBar from './component/Navbar/NavBar';
import Login from './component/Login/Login.';
import News from './component/News/News';
import Coin from './component/Coin/Coin'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<NavBar />}></Route>
          <Route path='/log' element={<Login />}></Route>
          <Route path='/news' element={<News/>}></Route>
          <Route path='/coinexchanges' element={<Coin />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
