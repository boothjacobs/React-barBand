import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { editComment, deleteComment } from "../../store/comment";
import "./comment.css";

const Comment = ({album, comment, user}) => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [showEditForm, setShowEditForm] = useState(false);
    const [commentEdit, setCommentEdit] = useState(comment.body);
    const albumId = album.id;
    const commId = comment?.id;

    const history = useHistory();

    const commentEditVerb = async (e) => {
        e.preventDefault();

        await dispatch(editComment(albumId, commId, commentEdit));
        history.push("/");
        history.goBack();
    };
    const commentDelete = async (e) => {
        await dispatch(deleteComment(albumId, commId));
        history.push("/");
        history.goBack();
    };

    return (
        <div className="comment">
            <div>
                <img className="user-img" src={user.profileImage} alt="profile"/>
            </div>
            <div className="content">
                <p> <b>{user.username}</b> {comment.body}</p>
            </div>
            { (user.id === sessionUser?.id) ?
                (
                    <div className="comment-buttons">
                        <button onClick={(e) => setShowEditForm(true)} type="button">Edit</button>
                        <button onClick={commentDelete} type="button">Delete</button>
                    </div>
                ) : null
            }
            <div className="conditional-edit-form">
                {showEditForm ? (
                    <div className="comment-form">
                        <form onSubmit={commentEditVerb}>
                            <textarea
                                value={commentEdit}
                                onChange={(e) => setCommentEdit(e.target.value)} />
                            <button type="submit">Post</button>
                        </form>
                    </div>
                ) : null }
            </div>
        </div>
    );
}

export default Comment;
