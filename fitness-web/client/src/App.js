import './assets/App.css';
import  HomePage from './pages/HomePAGE.jsx';
import React from 'react';
import BlogPage from './/pages/BlogPage.jsx';
import TrainingProgramas from './/pages/TrainingPrograms.jsx';
import {Login,Register} from './/pages/LoginPage.jsx';
import {TrainingForm} from './/pages/TrainingPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import 'react-native-gesture-handler';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createStackNavigator();

//Functional component
function App() {
  return (

    <div className="app-container bg-gradient bg-light ">
    
      <header className="App-header">
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="training" element={<TrainingForm />} />
          <Route path="auth" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
       
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

