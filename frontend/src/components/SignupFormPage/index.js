import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        if (confPassword !== password) {
            window.alert("Confirmed password must match password.")
        } else {
            setErrors([]);
            return dispatch(sessionActions.signup({ username, email, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
    }

    return (
        <div id="signup-page">
            <h3>Sign up for a BarBand fan account</h3>
            <div className="signup-form">
                <form onSubmit={handleSubmit}>
                    <ul className="error-render">
                        {errors.map((error, i) => <li key={i}>{error}</li>)}
                    </ul>
                        <div className="form-field">
                            <label htmlFor="username"> Username
                                <input type="text" value={username} name="username" required
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="form-field">
                            <label htmlFor="email"> Email
                                <input type="email" value={email} name="email" required
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="form-field">
                            <label htmlFor="password"> Password
                                <input type="password" value={password} name="password" required
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className="form-field">
                            <label> Confirm password
                                <input type="password" value={confPassword} required
                                    onChange={(e) => setConfPassword(e.target.value)}
                                />
                            </label>
                        </div>
                    <div className="form-field">
                        <button className="login-button">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default SignupFormPage;