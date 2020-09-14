import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Login() {

    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(e) {
        console.log(e.target.name);
        if (e.target.name === "username") {
            setUsername(e.target.value);
        } else if (e.target.name === "psw") {
            setPassword(e.target.value);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(username + "     " + password);
        if (username === "user" && password === "password") {
            dispatch({ type: 'SIGN_IN' });
        }
    };

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Enter User name" name="username" value={username} onChange={handleChange} required />
                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" value={password} onChange={handleChange} required />
                        <div className="button-right">
                            <button type="submit">Login</button>
                        </div>

                    </div>
                </form>
            </div>
            <div>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>Username is</td><th>user</th>
                        </tr>
                        <tr>
                            <td>Pasword is</td><th>pswword</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Login;