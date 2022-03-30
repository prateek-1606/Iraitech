import React, { useState } from 'react';
import './auth.css';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../api/auth';

const SignIn = () => {
    const [data, setData] = useState({ email: '', password: '' });
    const [wait, setWait] = useState(false);
    const history = useHistory();
    const handleChange = (e) => {
        console.log(e.target.value);
        setData({ ...data, [e.target.name]: e.target.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setWait(true);
        login(data)
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
            <h3 className="title" >Login</h3>
            <form className="form" onSubmit={handleSubmit} >
                <input onChange={handleChange} type="name" id="Email" name="email" placeholder="Your Email.." />
                <br />
                <input onChange={handleChange} type="name" id="Password" name="password" placeholder="Your Password.." />
                <input value={wait === true ? 'Please wait' : 'Login'} type="submit" />
                <div style={{ marginTop: '15px' }} >
                    <span style={{ fontSize: '16px' }} >
                        Don't have an account?
                    </span>
                    <Link to="/signup" style={{ float: 'right', fontSize: '16px', color: '#363637' }} display="inline" >
                        Create Account
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default SignIn;