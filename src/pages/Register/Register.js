import React from "react";
import useProtectedPage from "../../Hooks/UseProtectedPage";


export const Register = () => {
    useProtectedPage();

    return(
        <div>
            Register
        </div>
    )
}

export default Register