export const getUser = () => {
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        const userStr = sessionStorage.getItem('user')
        if (userStr) return userStr;
        if (userStr === 'undefined') return 'undefined';
        else return null
    };

}

export const getToken = () => {
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        const userToken = sessionStorage.getItem('token')
        if (userToken) return userToken;
        if (userToken === 'undefined') return 'undefined';
        else return null
    };

}

export const setUserSession = (token, user) => {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user", JSON.stringify(user));
}

export const removeUserSession = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
}