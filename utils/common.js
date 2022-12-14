export const getUser = () => {
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        const userStr = localStorage.getItem('user')
        if (userStr) return userStr;
        if (userStr === 'undefined') return 'undefined';
        else return null
    };

}

export const getToken = () => {
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        const userToken = localStorage.getItem('token')
        if (userToken) return userToken;
        if (userToken === 'undefined') return 'undefined';
        else return null
    };

}

export const getRegiToken = () => {
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('data')
        console.log(token);
        if (token) return token;
        if (token === 'undefined') return 'undefined';
        else return null
    }
}

export const setUserSession = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", user);
}

export const setRegistrationSession = (data) => {
    localStorage.setItem("data", data);
}

export const removeRegistrationSession = () => {
    localStorage.removeItem("data")
}

export const removeUserSession = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}