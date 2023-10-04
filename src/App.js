
import Login from './pages/login/Login.js'
import Register from './pages/register/Register'
import Home from './pages/home/Home.js'
import Profile from './pages/profile/Profile.js'
import LeftBar from './components/leftBar/LeftBar.js'
import RightBar from './components/rightBar/RightBar.js'
import NavBar from './components/navBar/NavBar.js'
import { useContext } from 'react'

import './style.scss'

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import { DarkModeContext } from './context/darkModeContext.js'
import { AuthContext } from './context/authContext.js'

function App() {

const {currentUser}=useContext(AuthContext);


   const Layout=()=>{
  
    const {darkMode}=useContext(DarkModeContext);
    // console.log(darkMode);

    console.log(currentUser);
     
    const them=darkMode?'theme-dark':'theme-light';



  return (
    <div className={them}>
    <NavBar/>
    <div style={{display:'flex'}}>
    <LeftBar/>
    <div style={{flex:6}}>
    <Outlet/>

    </div>
    <RightBar/>
    </div>
    </div>

   


  )
   }

   const ProtectedRoute=({children})=>{

    if(currentUser===false)
    {
     return <Navigate to='/login'/>
    }
    else
    return children;
   }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute> <Layout/></ProtectedRoute>,
      children:[
        {
          path:'/',
          element:<Home/>,
        },
        {
          path:'/profile/:id',
          element:<Profile/>,
        },
      ]
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);
  
  return (
     <>
       <RouterProvider router={router} />
     </>
  );
}

export default App;
