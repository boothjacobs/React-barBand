import { useEffect, useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { postComment, getComments } from "../../store/comment";

const CommentForm = () => {
    const dispatch = useDispatch();
    const commentBody = useSelector(state => state.commentBody);
    const { id } = useParams();

    const [body, setBody] = useState(commentBody);

    // useEffect(() => {
        // dispatch(getComments(id));
    //   }, [dispatch]);

    const handleSubmit = async (e) => {
        // e.preventDefault();
        const payload = { body };
        let newComment = await dispatch(postComment(id, payload));
    };

    return (
        <div className="comment-form">
            <form onSubmit={handleSubmit}>
                <textarea
                    placeholder="Why do you love this album?"
                    value={body}
                    onChange={(e) => setBody(e.target.value)} />
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default CommentForm;
