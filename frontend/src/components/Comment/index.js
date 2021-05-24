import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';

const Comment = ({body, user}) => {
    // const dispatch = useDispatch();
    // const { id } = useParams();

    //useSelector for state.comments

    return (
        <div id="comment">
            {/*"Media Object" layout from MDN*/}
            <div class="media">

                <div class="user-img">
                    {/* <img src="balloon-sq2.jpg" alt="Balloons"/> */}
                </div>

                <div class="content">
                    <p>{user.username}</p>
                    <p>{body}</p>
                </div>
            </div>

        </div>
    );
}

export default Comment;
