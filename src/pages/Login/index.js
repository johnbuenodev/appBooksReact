import React from 'react';
import '../../../src/global.css';
import './styles.css';
import logo from '../../assets/logo.svg';
import padlock from '../../assets/padlock.png'

export default function Login() {
    return (
        <>
            <div className="login-container">
                <section className="form">
                    <div className="imageText">
                        <img src={logo} alt="Logo login" />
                        <h1>Access your account</h1>
                    </div>
                    <form>
                        <input placeholder="Username" type="text" />
                        <input type="password" placeholder="Password" />
                        <button className="buttonLogin" type="submit">Login</button>
                    </form>
                </section>
                <img src={padlock} alt="login" />
            </div>
        </>
    )
}