import './App.css';

import HomePage from '../src/Components/HomePage';
import CoinDetailsPage from '../src/Components/CoinDetailsPage';
import SearchPage from '../src/Components/SearchPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate ,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={
          <HomePage />
          } />
          <Route path='/SearchPage' element={<SearchPage />} />
          <Route exact path="/CoinDetailsPage/:id" element={<CoinDetailsPage />} />
        </Routes>
    
    </Router>

  );
}

export default App;
