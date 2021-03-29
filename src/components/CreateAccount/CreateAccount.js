import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CreateAccount.css'
import { useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';
import { UserContext } from '../../App';

const CreateAccount = () => {
    const user = {
        name:undefined,
        email:undefined,
        password:undefined
    }
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setloggedInUser] = useContext(UserContext);

    const getValue = (id)=>{
        return document.getElementById(id).value;
    }

    const handleCreateAccount = () => {
        if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
        else firebase.app();
        user.name = getValue("fName")+" "+getValue("lName");
        user.email = getValue("email");
        const pass = getValue("pass");
        const cpass = getValue("cpass");
        if(pass===cpass){
            if(pass.length>8){
                user.password = pass;
            }else alert("Password should be more than 8 character")
        }else alert("Password & Confirm Password hould be same");
        console.log(user);
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // ...
                const { name, email } = user;
                const loggedInUser = { name, email };
                setloggedInUser(loggedInUser);
                history.replace(from);
            })
            .catch((error) => {
                console.log("hocche na");
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
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
        <div>
            <div className="d-flex justify-content-center">
                <div className="create-box">
                    <h3>Create Account</h3>
                    <input id="fName" className="create-input" type="fname" placeholder="First name" required />
                    <br />
                    <input id="lName" className="create-input" type="lname" placeholder="Last name" required />
                    <br />
                    <input id="email" className="create-input" type="email" placeholder="Enter your email" required />
                    <br />
                    <input id="pass" className="create-input" type="password" placeholder="Password" required />
                    <br />
                    <input id="cpass" className="create-input" type="password" placeholder="Confirm Password" required />
                    <br />
                    <button onClick={handleCreateAccount} className="login-btn">Create an account</button>
                    <br /><br />
                    <small>Already have an account</small>
                    <Link to={"/login"}> <small>Login</small> </Link><br />
                    <button onClick={handleFacebookSignIn} className="create-btn fb"> Login with Facebook</button><br />
                    <button onClick={handleGoogleSignIn} className="create-btn google">Login with Google</button>
                </div>

            </div>
        </div>
    );
};

export default CreateAccount;