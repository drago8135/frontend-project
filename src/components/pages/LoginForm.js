import React, { useState } from 'react'
import './loginform.css'

function LoginForm({Login, error}) {

    const [details, setdetails] = useState({uid: '', pwd:''});

    const submithandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
        <div className='outer'>
        <div className='box'>
        <form onSubmit={submithandler} className='input' id='login'>
            <div className='inside-form'>
            <h2 className='text-effect'>User Login</h2>
            {(error !== '' ? (
                <div>
                    {error}
                </div>
            ) : '')}
            <div className='form-ele'>
                <input type='text' name='uid' id='uid' className='if' placeholder='User id' onChange={e => setdetails({...details, uid: e.target.value})} value={details.uid} required/>
            </div>
            <div className='form-ele'>
                <input type='password' className='if' name='pwd' id='pwd' placeholder='Password' onChange={e => setdetails({...details, pwd: e.target.value})} value={details.pwd} required/>
            </div>
            <input type='submit' className='sb' value='Login' id='submitbtn'/> 
            </div>
        </form>
        </div>
        </div>
    )
}

export default LoginForm
