import React from 'react';

const signInForm = () => {
    return (
        <form>
            <input type="email" name="email" id="email" placeholder="Email"/>
            <input type="password" name="password1" id="password1" placeholder="Password"/>
            <input type="submit" value="Sign In" />
        </form>
    )
};

export default signInForm;