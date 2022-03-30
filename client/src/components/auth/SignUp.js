import React, { useState } from 'react';
import './auth.css';
import { Link, useHistory } from 'react-router-dom';
import { register } from '../../api/auth';

const SignUp = () => {
    const [data, setData] = useState({ firstname: '', lastname: '', email: '', phone: '', address: '', password: '' });
    const [wait, setWait] = useState(false);
    const history = useHistory();
    const handleChange = (e) => {
        console.log(e.target.value);
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setWait(true);
        register(data)
            .then((data) => {
                localStorage.setItem('token', JSON.stringify({ token: data.data.token }));
                setWait(false);
                history.push('/');
            })
            .catch((err) => {
                console.log(err);
                setWait(false);
            })
    }
    if (localStorage.getItem('token')) {
        history.push('/');
    }
    return (
        <div>
            <h3 className="title" >Create Account</h3>
            <form className="form" onSubmit={handleSubmit} >
                <input onChange={handleChange} type="firstname" id="firstname" name="firstname" placeholder="Your firstname.." />
                <br />
                <input onChange={handleChange} type="lastname" id="lastname" name="lastname" placeholder="Your lastname.." />
                <br />
                <input onChange={handleChange} type="name" id="Email" name="email" placeholder="Your Email.." />
                <br />
                <input onChange={handleChange} type="Phone" id="Phone" name="phone" placeholder="Your Phone.." />
                <br />
                <input onChange={handleChange} type="Address" id="Address" name="address" placeholder="Your Address.." />
                <br />
                <input onChange={handleChange} type="name" id="Password" name="password" placeholder="Your Password.." />
                <input value={wait === true ? 'Please wait' : 'Create Account'} type="submit" />
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