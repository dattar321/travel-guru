import React, { useContext } from 'react';
import logo from '../../Image/logoo.png';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './HeaderManager';
  
import './Header.css'
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";

const Header = () => {
  const [loggedInUser, setloggedInUser] = useContext(UserContext);

  const handleLogOut= ()=>{
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      setloggedInUser(undefined);
      loggedInUser(undefined);
    }).catch((error) => {
      // An error happened.
    });
  }
  
    return (
        <>
        <Nav>
          <NavLink to='/home'>
            <img src={logo} alt='logo' />
          </NavLink>
          <input className="search"type="search" id="site-search"placeholder="Search Your Destination"></input>
          <Bars />

          <NavMenu>
            <NavLink to='/news' activeStyle>
              News
            </NavLink>
            <NavLink to='/destination' activeStyle>
              Destination
            </NavLink>
            <NavLink to='/blog' activeStyle>
              Blog
            </NavLink>
            <NavLink to='/contact' activeStyle>
              Contact
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavBtn>
            {loggedInUser===undefined?
              <NavBtnLink to='/login'>Log In</NavBtnLink>:
              <button onClick = {handleLogOut}>Log out</button>
            }
            
          </NavBtn>
        </Nav>
      </>
    );
};

export default Header;
