import React, { useState } from 'react';
import './auth.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [data, setData] = useState({ firstname: '', lastname: '', email: '', phone: '', address: '', password: '' });
    const [wait, setWait] = useState(false);
    const handleChange = () => {

    }

    return (
        <div>
            <h3 className="title" >Create Account</h3>
            <form className="form" >
                <input onChange={handleChange} type="firstname" id="firstname" name="firstname" placeholder="Your firstname.." />
                <br />
                <input onChange={handleChange} type="lastname" id="lastname" name="lastname" placeholder="Your lastname.." />
                <br />
                <input onChange={handleChange} type="name" id="Email" name="Email" placeholder="Your Email.." />
                <br />
                <input onChange={handleChange} type="Phone" id="Phone" name="Phone" placeholder="Your Phone.." />
                <br />
                <input onChange={handleChange} type="Address" id="Address" name="Address" placeholder="Your Address.." />
                <br />
                <input onChange={handleChange} type="name" id="Password" name="Password" placeholder="Your Password.." />
                <input type="submit" />
                <div style={{ marginTop: '15px' }} >
                    <span style={{ fontSize: '16px' }} >
                        Already have an account?
                    </span>
                    <Link to="/signin" style={{ float: 'right', fontSize: '16px', color: '#363637' }} display="inline" >
                        Login to your Account
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp;