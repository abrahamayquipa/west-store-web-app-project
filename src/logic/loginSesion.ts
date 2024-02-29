const loginSesion = (user: {email: string, password: string}) => {
    const { email, password } = user;
    sessionStorage.setItem('user', JSON.stringify({ email, password }));
}

const getUserFromSession = () => {
    const user = sessionStorage.getItem('user');
    if (user !== null) {
        return JSON.parse(user);
    }
    return null;
};

export { loginSesion, getUserFromSession };