import React from 'react';

const Register = () => {
    return (
        <section>
            <h1>Register</h1>
            <form>
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" />
                <label>Password:</label>
                <input type="password" placeholder="Create a password" />
                <button type="submit">Register</button>
            </form>
        </section>
    );
};

export default Register;
