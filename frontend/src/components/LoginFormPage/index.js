import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './LoginForm.css';

const LoginFormPage = () => {
    const dispatch = useDispatch();

    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

        //session user slice of state
    const sessionUser = useSelector(state => state.session.user);
    if (sessionUser) return (
        //redirect a logged in user to the home page
        <Redirect to="/" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    }

    return (
        <div id="login-page">
            <div id="login-title">
                <h3>Log In</h3>
            </div>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <ul className="error-render">
                        {errors.map((error, i) => <li key={i}>{error}</li>)}
                    </ul>
                    <div className="form-field">
                        <label id="login-label1" htmlFor="username">Username or email</label>
                        <input id="login-input1" type="text" value={credential} name="username" required
                            onChange={(e) => setCredential(e.target.value)}
                        />
                    </div>
                    {/* trying to arrange form fields and labels to work in grid-template-areas */}
                    <div className="form-field">
                        <label id="login-label2" htmlFor="password"> Password</label>
                        <input id="login-input2" type="password" value={password} name="password" required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-field">
                        <button id="login-button1" className="login-button">Log In</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default LoginFormPage;
