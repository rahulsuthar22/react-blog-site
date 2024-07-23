import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from './appwrite/auth';
import { login, logout } from "./store/authSlice";
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import {Outlet} from 'react-router-dom';


const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch =  useDispatch();

  useEffect(() => {
    authService.getCurrentUser().then((userData)=>{
     if(userData){
      dispatch(login(userData));
     }else{
      dispatch(logout());
     }
    }).catch(error=> console.log(error))
    .finally(()=> setLoading(false))
  }, [])
  
  return !loading ? <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>:<>Loading........</>;
};

export default App;
