import { useEffect, useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { postComment, getComments } from "../../store/comment";

const CommentForm = () => {
    const dispatch = useDispatch();
    const commentBody = useSelector(state => state.commentBody);
    const { id } = useParams();

    const [body, setBody] = useState(commentBody);

    const history = useHistory();
    useEffect(() => {
        dispatch(getComments(id));
    }, [dispatch, id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { body };
        await dispatch(postComment(id, payload));
        history.push("/");
        history.goBack();
    };

    return (
        <form onSubmit={handleSubmit}>
                <div className="comment-form">
                        <textarea
                            placeholder="Why do you love this album?"
                            value={body}
                            onChange={(e) => setBody(e.target.value)} />
                        <button id="comment-button" type="submit">Post</button>
                </div>
            </form>
    )
}

export default CommentForm;
