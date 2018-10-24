export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};

export const clearAuthToken = () => {
    try {
        localStorage.removeItem('authToken');
    } catch (e) {}
};

export const setSession = () => {
    try {
        sessionStorage.setItem('firstVisit', true);
    } catch (e) {}
}

export const setSession1 = () => {
    try {
        sessionStorage.setItem('firstVisit', '1');
    } catch (e) {}
}