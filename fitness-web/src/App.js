import logo from './logo.svg';

import './App.css';
import Person from './/componenets/user.jsx';
import  Counter from './/componenets/counter.jsx';
import  HomePage from './/componenets/HomePAGE.jsx';
import NavigationBar from './/componenets/NavigationBar.jsx';
import React from 'react';
import BlogPage from './/pages/BlogPage.jsx';
import TrainingProgramas from './/pages/TrainingPrograms.jsx';
import Login from './/pages/LoginPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import 'react-native-gesture-handler';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createStackNavigator();

//Functional component
function App() {
  return (
    <div className="App">
      <header className="App-header">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="training" element={<TrainingProgramas />} />
          <Route path="login" element={<Login />} />
        </Routes>
       
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
