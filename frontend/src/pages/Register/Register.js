import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import "./styles.css";

import logoImg from "../../assets/logo.svg";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsApp] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUF] = useState("");

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            const response = await api.post("/ongs", data);
            alert(response.data.id);

            history.push("/");
        }
        catch (e) {
            alert("Erro! Tente novamente!");
            console.log(e);
        }
    }

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

                <form onSubmit={handleRegister}>
                    <input placeholder="Nome da ONG" type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input placeholder="E-mail" type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input placeholder="WhatsApp" type="text"
                        value={whatsapp}
                        onChange={(e) => setWhatsApp(e.target.value)}
                    />
                    <div className="uf-city">
                        <input placeholder="Cidade" type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                        <input placeholder="UF" type="text" style={{ width: 80 }}
                            value={uf}
                            onChange={(e) => setUF(e.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}