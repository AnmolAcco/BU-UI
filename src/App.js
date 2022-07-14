
import './App.css';
import Home from './components/RightSideBar/Home.jsx';
import Sidebar from './components/LeftSideBar/Sidebar';

function App() {
  return (
    <div className="App">
      
      <Sidebar></Sidebar>
      <Home></Home>
    </div>
  );
}

export default App;
