import React from 'react';

const Login = () => {
    return (
        <section>
            <h1>Login</h1>
            <form>
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" />
                <label>Password:</label>
                <input type="password" placeholder="Enter your password" />
                <button type="submit">Login</button>
            </form>
        </section>
    );
};

export default Login;
