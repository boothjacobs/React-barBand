import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';


const Navigation = ({isLoaded}) => {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
      sessionLinks = (
        <ProfileButton user={sessionUser} />
      );
    } else {
      sessionLinks = (
        <>
          <div className="nav-links">
            <NavLink to="/login">Log In </NavLink>
          </div>
          <div className="nav-links">
            <NavLink to="/signup"> Sign Up</NavLink>
          </div>
        </>
      );
    }

    return (
        <nav>
            <div className="nav-links" id="nav-home-link">
              <NavLink exact to="/">Home</NavLink>
            </div>
            <div id="session-links">
              {isLoaded && sessionLinks}
            </div>
        </nav>
    );

}

export default Navigation;
