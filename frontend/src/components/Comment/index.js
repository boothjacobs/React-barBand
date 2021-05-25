import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import "./comment.css";
import { editComment, deleteComment } from "../../store/comment";

const Comment = ({comment, user}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const { id } = useParams();
    const commId = comment.id;

    async function commentEdit(albumId, commId, payload) {
        let editedComment = await dispatch(editComment(id, commId, payload))
        console.log(editedComment)
    };
    async function commentDelete(id) {

    };

    return (
        <div className="comment">
            <div>
                <img className="user-img" src={user.profileImage} alt="profile"/>
            </div>
            <div className="content">
                <p> <b>{user.username}</b> {comment.body}</p>
            </div>
            { (user.id === sessionUser.id) ?
                (
                    <div className="comment-buttons">
                        <button onClick={commentEdit} type="button">Edit</button>
                        <button onClick={commentDelete} type="button">Delete</button>
                    </div>
                ) : null
            }
        </div>
    );
}

export default Comment;
