import React from "react"; 

import './styles.css';
import Logo from "../../assets/logo.svg";
import Power from "../../assets/power.svg";
import { Link } from "react-router-dom";

import { FiPower } from 'react-icons/fi';

export default function Book() {
    return (
        <>
         <div className="book-container">
           <header>
               <img src={Logo} alt="logo imagem" />
               <span>Welcome, <strong>John</strong>!</span>
               <Link className="buttonLogin" to="book/new">Add new Book</Link>
               <button type="button">
                 <FiPower size={18} color="#251FC5" />
               </button>
           </header>
         </div>
        </>
    );
}