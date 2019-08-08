import React from 'react';
import './Login.css';

import Logo from '../assets/logo.svg';

export default function Login(){
    return(
        <div className="login-container">
            <form>
                <img src={Logo} alt="Tindev"></img>
                <input placeholder="Digite seu usuario no Github" />
                <button type="submit" >Enviar</button>
            </form>
        </div>
        
    );
}