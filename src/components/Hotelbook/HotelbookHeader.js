import React,{ useContext } from 'react';
import logo from '../../Image/logoo.png';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
} from './HotelBookManager';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';

const HotelbookHeader = () => {
    let history = useHistory();
    const { from } = { from: { pathname: "/" } };
    const [loggedInUser, setloggedInUser] = useContext(UserContext);

    const handleLogOut = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            setloggedInUser(undefined);
            loggedInUser(undefined);
            history.replace(from);
        }).catch((error) => {
            // An error happened.
        });
    }
    return (
        <div>
            <Nav>
                <NavLink to='/home'>
                    <img src={logo} alt='logo' />
                </NavLink>
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
                    {loggedInUser === undefined ?
                        <NavBtnLink to='/login'>Log In</NavBtnLink> :
                        <button onClick={handleLogOut}>Log out</button>
                    }
                </NavBtn>
            </Nav>
        </div>
    );
};

export default HotelbookHeader;