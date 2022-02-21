import React from 'react';
import './App.css';

import HomeScreen from './HomeScreen';
// import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from './LoginScreen';
function App() {
	const user=null;
	return (
		<div className="app">
			{/*<BrowserRouter>
        {!user ? ( 
          <LoginScreen />
        ) : (
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            {/* <Route path="expenses" element={<Expenses />} /> }
          </Routes>
        )}
        </BrowserRouter> */}
        <HomeScreen/>
			</div>
	);
}

export default App;
