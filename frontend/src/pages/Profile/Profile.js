import React from 'react';
import { Link } from "react-router-dom";
import { FiPower } from "react-icons/fi";

import logo from "../../assets/logo.svg";
import "./styles.css";

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logo} alt="Be The Hero" />
                <span>Bem vinda, APAD</span>

                <Link className="button" to="/incident">Cadastrar novo caso</Link>

                <button type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <div className="body">

            </div>
        </div>
    );
}