import Collection from "./Collection";

import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { getCollection } from "../../store/collection";
import OtherCollections from "./OtherCollections";

import './CollectionPage.css';

const UserProfile = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const records = useSelector((state) => Object.values(state.collection));
    const user = records[0]?.User;

    useEffect(() => {
        dispatch(getCollection(id))
    }, [dispatch, id]);

    return (
        <>
            <div id="user-profile">
                <img id="profile-image" alt="user" src={user?.profileImage} />
                <h1>{user?.username}</h1>
                <div id="edit-profile-link">
                    <Link>Edit Profile</Link>
                </div>
            </div>
            <div className="divider"></div>
            <Collection />
        </>
    )

};


export default UserProfile;
