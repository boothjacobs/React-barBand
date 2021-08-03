import Collection from "./Collection";

import { useEffect, useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { getCollection } from "../../store/collection";
import { editProfile, restoreUser } from '../../store/session';
// import EditProfile from "./EditProfile";

import './CollectionPage.css';

const UserProfile = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { id } = useParams();
    const records = useSelector((state) => Object.values(state.collection));
    const sessionUser = useSelector(state => state.session.user);
    //currently using the association on Collection to get the user info related to the page (without a second database call)
    let user;
    if (records.length > 0) {
        user = records[0]?.User;
    } else {
        user = sessionUser;
    };

    useEffect(() => {
        dispatch(getCollection(id))
    }, [dispatch, id]);

    //Edit Profile stuff
    const [showForm, setShowForm] = useState(false);
    const [bio, setBio] = useState(user.bio);
    const [location, setLocation] = useState(user.location);
    const [image, setProfileImage] = useState(user.profileImage);

    const editProfileButton = (e) => {
        setShowForm(true);
    };

    const getImage = (e) => {
        if (e.target.files) {
            const imgFile = e.target.files[0];
            setProfileImage(imgFile);
        } else {
            return;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(editProfile({ location, bio, image, user }));
        dispatch(restoreUser());
        setShowForm(false);
        history.push("/");
        history.goBack();
    }

    return sessionUser && (
        <div className="user-profile-page">
            <div id="user-profile">
                <div>
                    <img id="profile-image" alt="user" src={user?.profileImage} />
                </div>
                <div>
                    <h1>{user?.username}</h1>
                </div>
                <div>
                    <p>{user?.location}</p>
                    <p>{user?.bio}</p>
                </div>
                {user?.id === sessionUser?.id ? (<div id="edit-profile-link">
                    <button type="button" onClick={editProfileButton}>Edit Profile</button>
                </div>) : null}
            </div>

            {showForm ? <>
                <div className="divider"></div>
                <div className="signup-form">
                    <h3>Edit Your Profile Information</h3>
                    <form onSubmit={handleSubmit} className="auth-form">
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
                                <input type="file" name="image"
                                    onChange={getImage}/>
                        </div>
                        <div className="form-field">
                            <button className="login-button">Save</button>
                        </div>
                    </form>
                </div>
            </> : null}

            <div className="divider"></div>
            {records.length > 0 ? <Collection /> :
                <div id="conditional-user-profile">
                    <h3>Sorry, friend, you don't have a collection yet!</h3>
                </div>}
        </div>
    )

};


export default UserProfile;
