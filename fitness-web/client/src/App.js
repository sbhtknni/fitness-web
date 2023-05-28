import './assets/App.css';
import  UserPage from './pages/UserPage.jsx';
import React, {  useEffect } from 'react';
import BlogPage from './/pages/BlogPage.jsx';
import TrainingProgramas from './pages/TrainingPrograms.jsx';
import { Login, Register } from './/pages/AuthPage.jsx';
import {TrainingForm} from './/pages/TrainingPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
// import 'react-native-gesture-handler';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createStackNavigator();

//Functional component
function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.3.1/mdb.min.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (

    <div className="app-container bg-gradient bg-light ">
    
      <header className="App-header">
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="userpage" element={<UserPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="training" element={<TrainingForm />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="TrainingProgramas" element={<TrainingProgramas />} />
        </Routes>
       
    </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

