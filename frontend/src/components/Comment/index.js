import "./comment.css";

const Comment = ({body, user}) => {

    return (
        // <div id="comment">

        <div className="comment">
            <div>
                <img className="user-img" src={user.profileImage} alt="profile photo"/>
            </div>
            <div className="content">
                <p> <b>{user.username}</b> {body}</p>
            </div>
        </div>

        //  </div>
    );
}

export default Comment;
