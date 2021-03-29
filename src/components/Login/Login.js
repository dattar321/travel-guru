import React, { useContext } from 'react';
import './Login.css';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

const Login = () => {
    const getValue = (id) => {
        return document.getElementById(id).value;
    }
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setloggedInUser] = useContext(UserContext);

    const handleLogin = () => {
        if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
        else firebase.app();

        const email = getValue("email");
        const pass = getValue("pass");
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
                const displayName = email;
                const loggedInUser = { name: displayName, email };
                setloggedInUser(loggedInUser);
                history.replace(from);
                console.log("log in hoise");
                console.log(loggedInUser);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });

    }
    const handleFacebookSignIn = () => {
        if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
        else firebase.app();

        const provider = new firebase.auth.FacebookAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                let credential = result.credential;
                // The signed-in user info.
                let user = result.user;
                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                let accessToken = credential.accessToken;
                const { displayName, email } = result.user;
                const loggedInUser = { name: displayName, email };
                setloggedInUser(loggedInUser);
                history.replace(from);
                // ..
            })
            .catch((error) => {

            });
    }

    const handleGoogleSignIn = () => {
        if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
        else firebase.app();
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                let credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                let token = credential.accessToken;
                const { displayName, email } = result.user;
                const loggedInUser = { name: displayName, email };
                setloggedInUser(loggedInUser);
                history.replace(from);
                // ...
            }).catch((error) => {
                console.log("failing");
            });
    }
    return (

        <div className="d-flex justify-content-center">
            <div className="login-box">
                <h3>Login</h3>
                <input id="email" className="login-input" type="email" placeholder="Enter your email" required />
                <br />
                <input id="pass" className="login-input" type="password" placeholder="Password" required />
                <br />
                <button onClick={handleLogin} className="login-btn">Log in</button>
                <br /><br />
                <small>Didn't have an account?</small><br />
                <Link to={"/createaccount"}> <small>Create an account</small> </Link><br />
                <button onClick={handleFacebookSignIn} className="login-btn fb"> Login with Facebook</button><br />
                <button onClick={handleGoogleSignIn} className="login-btn google">Login with Google</button>
            </div>

        </div>

    );
};

export default Login;
