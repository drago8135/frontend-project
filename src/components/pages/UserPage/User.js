import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import LoginForm from '../LoginForm'
import TransferForm from '../TransferPage/TransferForm';

const User = () => {

    const userdat = {
        uid: '1001',
        pwd: '1001'
    }

    const [user, setuser] = useState({uid: '', pwd: ''});
    const [error, seterror] = useState('');

    const [bttn, setbttn] = useState(false);

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

    const testfun =() =>{
        console.log("button ok");
        setbttn(true)
    }

    return (
        <div>
            {(user.uid !== '') ? (
                <div className='usrdiv'>
                    <h2 className='htext' style={{color: 'whitesmoke' , padding: '10px'}}>Welcome, {user.uid}</h2>
                    <button onClick={logout} className='usr-btn' style={{marginLeft: '25%'}}>Logout</button>
                    <Link to={`/User/Detailsp`}>
                        <button className='usr-btn' style={{marginLeft: '20px'}} onClick={testfun}>View Info</button>
                    </Link>
                    <TransferForm />
                    <Outlet />
                </div>
                
            ) : (
                <LoginForm Login={login} error={error}/>
                )}
        </div>
    )
}

export default User
