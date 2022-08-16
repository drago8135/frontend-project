import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Admin from './components/pages/AdminPage/Admin';
import Detailsp from './components/pages/DetailsPage/Detailsp';
import Home from './components/pages/HomePage/Home';
import User from './components/pages/UserPage/User';

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Home' element={<Home />} />
        <Route path='Admin' element={<Admin />} />
        <Route path='User' exact element={<User />}>
          <Route path='Detailsp' element={<Detailsp />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
