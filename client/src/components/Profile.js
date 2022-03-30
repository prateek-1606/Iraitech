import React, { useEffect, useState } from 'react';
import { getUser } from '../api/auth';
import { useHistory } from 'react-router-dom';
import './profile.css';

const Profile = () => {

    const [user, setUser] = useState({});
    const history = useHistory();
    if (!localStorage.getItem('token')) {
        history.push('/signin');
    }
    useEffect(() => {
        getUser()
            .then((user) => {
                console.log(user);
                setUser(user.data);
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            <h2 className="title" >Welcome {user.firstname}</h2>
            <div className="container">

                <div style={{ textAlign: 'center' }} ><img className="image" width="100px" height="100px" src="https://tse4.mm.bing.net/th?id=OIP.MhAct1iyTlZ8NYunL_ucowHaEr&pid=Api&P=0&w=288&h=182" ></img></div>
                <div className="name" >{user.firstname} {user.lastname}</div>
                <div className="email" >{user.email}</div>
                <div className="email" >{user.phone}</div>
                <div className="email" >{user.address}</div>
            </div>
        </div >
    )
}

export default Profile;