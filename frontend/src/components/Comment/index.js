import { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';

const Comment = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    // const records = useSelector((state) => state.albums);
    // const album = records[id];
    //useSelector for state.comments

    useEffect(() => {
        dispatch(getComment(id)) //pass in album ID
    }, [dispatch, id]);

    return (
        <div id="comment">
            {/*"Media Object" layout from MDN*/}
            <div class="media">

                <div class="user-img">
                    <img src="balloon-sq2.jpg" alt="Balloons"/>
                </div>

                <div class="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula vitae ligula sit amet maximus. Nunc auctor neque ipsum, ac porttitor elit lobortis ac. Vivamus ultrices sodales tellus et aliquam. Pellentesque porta sit amet nulla vitae luctus. Praesent quis risus id dolor venenatis condimentum.</p>
                </div>
            </div>

        </div>
    );
}
