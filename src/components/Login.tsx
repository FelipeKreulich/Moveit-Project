import axios from "axios";
import styles from "../styles/components/Login.module.css";
import { useState } from "react";
import Modal from '../components/SingupModal';

import { FiCornerDownRight, FiGithub } from "react-icons/fi";

export function Login() {

    const [show, setShow] = useState(false)

    const handleLogin = (event) => {
        event.preventDefault();
        axios
            .get(`https://api.github.com/users/${event.target.user.value}`)
            .then(function (response) {
                localStorage.setItem(
                    "login",
                    JSON.stringify({
                        avatar: response.data.avatar_url,
                        name: response.data.name,
                    })
                );
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <div className={styles.container}>

            <div className={styles.modal__login}>
                <img src="/icons/moveitlogo.svg" alt="Moveit" />

                <h1><span style={{color: "#FFFFFF"}}>Bem Vindo</span><span style={{color: "#4CD62B"}}>(a)</span></h1>

                <div className={styles.message}>
                    <FiGithub className={styles.icon}/>
                    <p>Faça Login com seu Github</p>
                </div>

                <form className={styles.form} onSubmit={handleLogin}>
                    <input type="text" placeholder="Digite seu Github" name="user" />
                    <button className={styles.button_login} type="submit"><FiCornerDownRight /></button>
                    <button className={styles.button_singup} onClick={() => setShow(true)}>CADASTRE-SE</button>
                </form>

                <Modal onClose={() => setShow(false)} show={show}>
                        <form className={styles.form_singup}>
                            <label >Email: <input type="email" placeholder="Digite seu Email" required/></label>
                            <label>Senha: <input type="password" placeholder="Digite uma Senha" minLength={4} maxLength={8} required/></label>
                            <button type="submit">Cadastrar</button>
                        </form>
                </Modal>
            </div>

        </div>
    );
}
