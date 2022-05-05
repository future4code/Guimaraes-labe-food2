import React from "react";
import useProtectedPage from "../../Hooks/UseProtectedPage";


export const Profile = () => {
    useProtectedPage();

    return(
        <div>
            
            Profile
        </div>
    )
}

export default Profile