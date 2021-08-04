import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import './signup.css';

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");
    const [location, setLocation] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [image, setProfileImage] = useState("");

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const getImage = (e) => {
        if (e.target.files) {
            const imgFile = e.target.files[0];
            setProfileImage(imgFile);
        } else {
            console.log("no image")
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (confPassword !== password) {
            window.alert("Confirmed password must match password.")
        } else {
            setErrors([]);
            return dispatch(sessionActions.signup({ username, email, location, bio, password, image }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
    };

    return (
        <div id="signup-page">
            <div className="signup-form">
                <h3>Sign up for a BarBand fan account</h3>
                <form onSubmit={handleSubmit} className="auth-form">
                    <ul className="error-render">
                        {errors.map((error, i) => <li key={i}>{error}</li>)}
                    </ul>
                    <div className="form-field">
                        <label htmlFor="username"> Username: </label>
                        <input type="text" value={username} name="username" required
                            onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="email"> Email: </label>
                        <input type="email" value={email} name="email" required
                            onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="password"> Password: </label>
                        <input type="password" value={password} name="password" required
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="form-field">
                        <label> Confirm password: </label>
                        <input type="password" value={confPassword} required
                            onChange={(e) => setConfPassword(e.target.value)}/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="location"> Location: </label>
                        <input type="text" value={location} name="location"
                            onChange={(e) => setLocation(e.target.value)}/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="bio"> Bio: </label>
                        <textarea value={bio} name="bio"
                            onChange={(e) => setBio(e.target.value)}/>
                    </div>
                    <div className="form-field">
                        <label htmlFor="image"> Profile Image: </label>
                        <input id="file-field" type="file" name="image" onChange={getImage}/>
                    </div>
                    <div className="form-button">
                        <button className="login-button">Sign Up</button>
                    </div>
                </form>
                <div className="switch-link">
                    <Link to="/login">Already have an account?</Link>
                </div>
            </div>
        </div>
    )

}

export default SignupFormPage;
