import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";
import logo from "../../assets/logo.svg";
import "./styles.css";

export default function Profile() {
    const [incidents, setIncidents] = useState([]);
    const ongName = localStorage.getItem("ongName");
    const ongId = localStorage.getItem("ongID");

    const history = useHistory();

    useEffect(() => {
        api.get("profile", {
            headers: {
                Authorization: ongId
            }
        })
            .then(resp => {
                setIncidents(resp.data);
                console.log(resp.data);
            });

    }, [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId
                }
            });

            setIncidents(incidents.filter(e => e.id !== id));
        }
        catch (e) {
            console.log(e);
            alert("Erro ao deletar um caso!");
        }
    }

    function handleLogaout() {
        console.log("asda");
        localStorage.clear();

        history.push("/");
    }

    return (
        <div className="profile-container">
            <header >
                <img src={logo} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>

                <button onClick={handleLogaout} type="button">
                    <FiPower size={18} color="#e02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {
                    incidents.map((item, index) =>
                        <li key={index}>
                            <strong>CASO:</strong>
                            <p>{item.title}</p>

                            <strong>DESCRIÇÃO:</strong>
                            <p>{item.description}</p>

                            <strong>VALOR:</strong>
                            <p>{Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(item.value)}</p>

                            <button type="button" onClick={() => handleDeleteIncident(item.id)}>
                                <FiTrash2 size={20} color="#a8a8b3" />
                            </button>
                        </li>
                    )
                }
            </ul>
        </div>
    );
}