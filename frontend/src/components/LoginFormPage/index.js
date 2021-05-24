import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

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
            <div className="login-form">
                <h3>Log In</h3>
                <form onSubmit={handleSubmit}>
                    <ul className="error-render">
                        {errors.map((error, i) => <li key={i}>{error}</li>)}
                    </ul>
                    <div className="form-field">
                        <label htmlFor="username">Username or email</label>
                        <input type="text" value={credential} name="username" required
                            onChange={(e) => setCredential(e.target.value)}
                        />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password"> Password</label>
                        <input type="password" value={password} name="password" required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-field">
                        <button className="login-button">Log In</button>
                    </div>
                </form>
                <div className="switch-link">
                    <Link to="/signup">Need an account?</Link>
                </div>
            </div>
        </div>

    )
}

export default LoginFormPage;
