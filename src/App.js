import React, { useState } from 'react'
import Header from './components/Header';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Chat from './components/Chat';

function App() {
  const [user, setUser] = useState("Tracy")

  return (
    // Block Element Modifier naming convention
    <div className="app">
      <Router>
      {!user ? (
        <h1>LOGIN page</h1>
      ): (
        <>
          {/* Header */}
          <Header />
          <div className="app__body">
            {/* Sidebar */}
            <Sidebar />
            {/* React-Router -> Chat screen */}
            <Routes>
              <Route path="/room/:roomId" element={<Chat />}/>
              <Route exact path="/" />
            </Routes>
          </div>
        </>
      )}
      </Router>
    </div>
  );
}

export default App;
