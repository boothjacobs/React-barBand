import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {demoLogin} from "../../store/session";
import ProfileButton from './ProfileButton';
import './Navigation.css';


const Navigation = ({isLoaded}) => {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const demoButton = async (e) => {
      e.preventDefault();
      await dispatch(demoLogin());

      if (sessionUser) return (
        <Redirect to="/" />
      );
    }

    let sessionLinks;
    if (sessionUser) {
      sessionLinks = (
        <ProfileButton user={sessionUser} />
      );
    } else {
      sessionLinks = (
        <>
          <div className="nav-links">
            <button type="button" onClick={demoButton}>
              Demo User
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
