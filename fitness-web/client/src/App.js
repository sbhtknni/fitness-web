
import React from 'react';
import TrainingProgramas from './pages/TrainingPrograms.jsx';
import  Login  from './componenets//AuthPageComp//LoginComponent.jsx';
import  Register  from './componenets//AuthPageComp//RegisterComponent.jsx';
import {TrainingForm} from './/pages/TrainingPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserHomePage from './pages/UserHomePage.jsx';



//Functional component
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="userpage" element={<UserHomePage />} />
          <Route path="training" element={<TrainingForm />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="muscleInformation" element={<TrainingProgramas />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

