import { useEffect, useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';

import { postComment } from "../../store/comment";

const CommentForm = () => {
    const dispatch = useDispatch();
    const comment = useSelector(state => state.comment);

    const [body, setBody] = useState(comment.body);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = { body };

        // let editedComment = await dispatch(editComment(payload))
        // console.log(editedComment)

    };

    const handleCancelClick = (e) => {
        e.preventDefault();
        setBody("");
    };

    return (
        <div className="comment-form">
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Why do you love this album?"
                    value={body}
                    onChange={(e) => setBody(e.target.value)} />
                <button type="submit">Post</button>
                <button type="button" onClick={handleCancelClick}>Cancel</button>
            </form>
        </div>
    )
}

export default CommentForm;
