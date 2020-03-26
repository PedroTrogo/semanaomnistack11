import React from 'react';
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";

import logoImg from "../../assets/logo.svg";

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para o logon
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome da ONG" type="text" />
                    <input placeholder="E-mail" type="email" />
                    <input placeholder="WhatsApp" type="text" />
                    <div className="uf-city">
                        <input placeholder="Cidade" type="text" />
                        <input placeholder="UF" type="text" style={{ width: 80 }} />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}