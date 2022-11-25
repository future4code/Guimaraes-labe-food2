export const goToLoginPage = (navigate) => {
    navigate('/login')
}

export const goToRegister = (navigate) => {
    navigate('/register')
}

export const goToRegisterAdress = (navigate) => {
    navigate('/register/adress')
}

export const goToHome = (navigate) => {
    navigate('/home')
}

export const goToCart = (navigate) => {
    navigate('/cart')
}

export const goToRestaurant = (navigate,id) => {
    navigate(`/restaurant/${id}`)
}

export const goToProfile = (navigate) => {
    navigate('/profile')
}

export const goToProfileEditData = (navigate) => {
    navigate('/profile/editData')
}

export const goToProfileEditAdress = (navigate) => {
    navigate('/profile/editAdress')
}

export const goBack = (navigate) =>{
    navigate(-1)
}