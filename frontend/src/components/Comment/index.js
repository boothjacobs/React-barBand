import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import "./comment.css";

const Comment = ({body, user}) => {
    const sessionUser = useSelector(state => state.session.user);

    return (
        // <div id="comment">

        <div className="comment">
            <div>
                <img className="user-img" src={user.profileImage} alt="profile photo"/>
            </div>
            <div className="content">
                <p> <b>{user.username}</b> {body}</p>
            </div>
            { (user.id === sessionUser.id) ?
                (
                    <div className="comment-buttons">
                        <button type="button">Edit</button>
                        <button type="button">Delete</button>
                    </div>
                ) : null
            }

        </div>

        //  </div>
    );
}

export default Comment;
