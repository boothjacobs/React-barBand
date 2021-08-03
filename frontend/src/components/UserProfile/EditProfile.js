import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { editProfile, restoreUser } from '../../store/session';

const EditProfile = ({user}) => {
    const dispatch = useDispatch();

    const [bio, setBio] = useState(user.bio);
    const [location, setLocation] = useState(user.location);
    const [image, setProfileImage] = useState(user.profileImage);

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

        console.log("front end, EditProfile.js", user)
        dispatch(editProfile({ location, bio, image, user }));
        dispatch(restoreUser());
    }

    return (
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
    )
};

export default EditProfile;
