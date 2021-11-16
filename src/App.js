import React from 'react'
import Header from './components/Header';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    // Block Element Modifier naming convention
    <div className="app">
      {/* Header */}
      <Header />
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* React-Router -> Chat screen */}
      </div>
    </div>
  );
}

export default App;
