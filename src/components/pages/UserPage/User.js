import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm'
import TransferForm from '../TransferPage/TransferForm';

const User = () => {

    const userdat = {
        uid: '1001',
        pwd: '1001'
    }

    const [user, setuser] = useState({uid: '', pwd: ''});
    const [error, seterror] = useState('');

    const login = details =>{
        console.log(details);

        if (details.uid === userdat.uid && details.pwd === userdat.pwd)
        {
            console.log("logged in");
            setuser({
                uid: details.uid,
                pwd: details.pwd
            });
        }
        else{
            console.log("bruh");
            seterror("bruh");
        }
    }

    const logout =() =>{
        console.log('logout');
        setuser({uid: '', pwd: ''});
        seterror('');
    }

    return (
        <div>
            {(user.uid !== '') ? (
                <div>
                    <h2>Welcome, <span>{user.uid}</span></h2>
                    <button onClick={logout}>Logout</button>
                    <Link to='/User/Detailsp'>
                    <button onClick>View Info</button>
                    </Link>
                    <TransferForm />
                </div>
                
            ) : (
                <LoginForm Login={login} error={error}/>
                )}
            </div>
    )
}

export default User
