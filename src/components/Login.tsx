import axios from "axios";
import styles from "../styles/components/Login.module.css";

import { FiCornerDownRight, FiGithub } from "react-icons/fi";

export function Login() {
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
                    <button type="submit"><FiCornerDownRight /></button>
                </form>
            </div>

        </div>
    );
}
