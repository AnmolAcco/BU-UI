import "./App.css";
import Home from "./components/RightSideBar/Home.jsx";
import Sidebar from "./components/LeftSideBar/Sidebar";
import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();
function App() {
  const [headerName, setHeaderName] = useState('Budgets');
  const [activeDate, setActiveDate] = useState({});
  const [backgroundColor, setBackgroundColor] = useState(false);
  const rootData = {
    headerName,
    setHeaderName,
    activeDate,
    setActiveDate,
    backgroundColor,
    setBackgroundColor
  };
  return (
    <AppContext.Provider value={rootData}>
      <div className="App">
        <Sidebar></Sidebar>
        <Home></Home>
      </div>
    </AppContext.Provider>
  );
}

export default App;
