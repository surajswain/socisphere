import './navbar.scss'
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';

const NavBar = () => {
  const {toggle,darkMode}=useContext(DarkModeContext);

  const {currentUser}=useContext(AuthContext);

  return (
    <>
    <div className='navbar'> 
    <div className='left'>
    <Link to='/' style={{textDecoration:'none'}}>  
      <span>SociSphere</span>
    </Link>
    <HomeOutlinedIcon/>
    <div onClick={toggle} style={{cursor:'pointer'}}>
     {darkMode? <WbSunnyOutlinedIcon/>:<DarkModeOutlinedIcon/>}

    </div>
    <GridViewOutlinedIcon/>
    <div className='search'>
      <SearchOutlinedIcon/>
      <input type='text' placeholder='Search...'/>
          </div>
    </div>
    <div className='right'>
      <PersonOutlinedIcon/>
      <EmailOutlinedIcon/>
      <NotificationsOutlinedIcon/>
      <div className='user'>
        <img src="https://images.pexels.com/photos/17045110/pexels-photo-17045110/free-photo-of-young-brunette-with-bangs-standing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='img'/> 
        <span>{currentUser.name}</span>
      </div>
    </div>
    </div>
    </>
  )
}

export default NavBar