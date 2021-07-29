import Collection from "./Collection";

import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { getCollection } from "../../store/collection";

import './CollectionPage.css';

const UserProfile = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const records = useSelector((state) => Object.values(state.collection));
    const sessionUser = useSelector(state => state.session.user);
    //currently using the association on Collection to get the user info related to the page (without a second database call)
    let user = records[0]?.User;

    useEffect(() => {
        dispatch(getCollection(id))
    }, [dispatch, id]);

    return (
        <>
            {user ? (<div id="user-profile">
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
                    {/* {user?.id === sessionUser?.id ? (<div id="edit-profile-link">
                        <Link>Edit Profile</Link>
                    </div>) : null}
                    EDIT PROFILE HAS NO BACKEND    */}
                </div>) : (
                    <div id="conditional-user-profile">
                        <h3>Sorry, friend, you don't have a collection yet!</h3>
                    </div>)}

            <div className="divider"></div>
            <Collection />
        </>
    )

};


export default UserProfile;
