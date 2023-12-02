import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import LoginRegistration from './LoginRegistration';
import { useEffect } from 'react';
import MyProfile from './MyProfile';
import Trending from './Trending';
import Feed from './Feed';
import Header from './Header';
function App() {
  const navigate = useNavigate();
  // useEffect(()=>{
  //   navigate('/logRegister');
  // },[]);

  return (
    <Routes>
      <Route path='/' element={<Navigate to='/logRegister'/>}/>
      <Route path="/logRegister" element={<LoginRegistration/>}/>
      <Route element={<Header/>}>
        <Route path='/myProfile' element={<MyProfile/>}/>
        <Route path='/feed' element={<Feed/>}/>
        <Route path='/trending' element={<Trending/>}/>
      </Route>
        <Route path='*' element={<h1>Not Found</h1>}/>
    </Routes>
    // <LoginRegistration/>

  );
}

export default App;
