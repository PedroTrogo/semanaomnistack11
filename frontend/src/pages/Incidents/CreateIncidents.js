import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import "./styles.css"

import logoImg from "../../assets/logo.svg";

export default function CreateIncident() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");

    const hostory = useHistory();

    async function handlerNewIncident(e) {
        e.preventDefault();

        const id = localStorage.getItem("ongID");

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post("incidents", data, {
                headers: {
                    Authorization: id
                }
            });

            alert("Caso criado com sucesso!");

            hostory.push("/profile");
        }
        catch (e) {
            console.log(e);
            alert("Erro ao cadastrar caso");
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#e02041" />
                        Voltar para home
                    </Link>
                </section>

                <form onSubmit={handlerNewIncident}>
                    <input placeholder="Título do caso" type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea placeholder="Descrição" type="email"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <input placeholder="Valor em reais" type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <div className="buttons-incidents">
                        {/* <button className="button" style={{ width: 280, marginRight: 10, background: "#fff", color: "#737380" }}
                            type="submit">Cancelar</button> */}
                        <button className="button" type="submit">Cadastrar</button>
                    </div>

                </form>
            </div>
        </div>
    );
}