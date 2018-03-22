import React from 'react';

const joinForm = () => {
    return (
        <form>
            <input type="text" name="firstname" id="firstname" placeholder="First Name" />
            <input type="text" name="lastname" id="lastname" placeholder="Last Name" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="tel" name="phone" id="phone" placeholder="Phone" />
            <input type="password" name="password1" id="password1" placeholder="Password" />
            <input type="password" name="password2" id="password2" placeholder="Confirm Password" />
            <input type="submit" value="Join" />
        </form>
    )
};

export default joinForm;