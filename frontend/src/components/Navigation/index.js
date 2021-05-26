import React from 'react';
import { Link } from 'react-router-dom';
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
            <button type="button">
              <Link to="">Demo User </Link>
            </button>
          </div>
          <div className="nav-links">
            <button type="button">
              <Link to="/login">Log In </Link>
            </button>
          </div>
          <div className="nav-links">
            <button type="button">
              <Link to="/signup"> Sign Up</Link>
            </button>
          </div>
        </>
      );
    }

    return (
        <nav>
            <div className="nav-links" id="nav-home-link">
              <button type="button">
                <Link exact to="/">BarBand</Link>
              </button>
            </div>
            <div id="session-links">
              {isLoaded && sessionLinks}
            </div>
            <div className="divider"></div>
        </nav>
    );

}

export default Navigation;
