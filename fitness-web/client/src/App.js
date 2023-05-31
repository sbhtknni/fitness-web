
import  UserPage from './pages/UserPage.jsx';
import React from 'react';
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
  return (

    
    
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="userpage" element={<UserPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="training" element={<TrainingForm />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/signup" element={<Register />} />
          <Route path="TrainingProgramas" element={<TrainingProgramas />} />
        </Routes>
       
    </BrowserRouter>
  );
}

export default App;

