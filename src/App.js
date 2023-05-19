import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Nabvar/Navbar';
import { SearchBar } from './Components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchBar/>
    </div>
  );
}

export default App;
