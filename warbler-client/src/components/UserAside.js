import React from "react";
import DefaultProfileImg from "../images/default-profile-image.jpg";

const UserAside = ({profileImageUrl, username}) => {
    return (
        <aside className="col-sm-2">
            <div className="panel panel-default">
                <div className="panel-body">
                    <img 
                        className="img-thumbnail" 
                        src={profileImageUrl || DefaultProfileImg} 
                        alt={username}
                        width="200"
                        height="200"
                    />
                </div>
            </div>
        </aside>
    ); 
}

export default UserAside;