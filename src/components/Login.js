import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionLogin, actionLogout } from '../actions/actionLogin';
import '../styles/formStyle.css';

export const Login = () => {

    const dispatch = useDispatch()

    const [values, setValues] = useState({

        user: '',
        password: ''
    })

    const { user, password } = values

    const handleChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(actionLogin(user, password))
    }
    console.log(user, password);

    return (
        <div>
            <form onSubmit={handleSubmit} className='m-5'>
                <div className="form-group ">
                    <label for="exampleInputEmail1">Email address</label>
                    <input
                        name="user"
                        onChange={handleChange}
                        value={user}
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input
                        name='password'
                        onChange={handleChange}
                        value={password}
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password" />
                </div>
                <br />
                <div >
                    <button type='submit' className="btn btn-dark">Login</button>
                </div>
                <div >
                    <button type='button' className="btn btn-dark" 
                    onClick={() => dispatch(actionLogout())}
                    >Logout</button>
                </div>
            </form>
        </div>
    )
}
