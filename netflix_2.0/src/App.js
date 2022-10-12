import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import "./App.css";

function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
