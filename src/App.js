import React from 'react'
import Header from './components/Header';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    // Block Element Modifier naming convention
    <div className="app">
      <Router>
        {/* Header */}
        <Header />
        <div className="app__body">
          {/* Sidebar */}
          <Sidebar />
          {/* React-Router -> Chat screen */}
          <Routes>
            <Route path="/room/;roomId" />
              {/* <h1>Chat Screen</h1> */}
              {/* <Chat /> */}
            <Route path="/" />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
