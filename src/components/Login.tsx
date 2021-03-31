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
        <div
            className={`${styles.container} animate__animated animate__fadeIn`}
        >
            <div>
                <img className={styles.logoInvisible} src="/icons/logoextra.svg" alt="moveit"/>
            </div>

            <div className={styles.conteudo}>
                <img className={styles.logoMoveit} src="/icons/moveitlogo.svg" alt="Logo Moveit"/>

                <h1 className={styles.welcomeMessage}>Bem-Vindo(a)</h1>

                <span className={styles.messageAccount}> <FiGithub className={styles.icongithub}></FiGithub> Faça login com o Github</span>

                <form onSubmit={handleLogin}>
                    <input
                        className={styles.inputLogin}
                        type="text"
                        name="user"
                        placeholder="Digite seu GitHub"
                    />
                    <button className={styles.btnLogin} type="submit">
                        <FiCornerDownRight className={styles.iconbtn}></FiCornerDownRight>
                    </button>
                </form>
            </div>
        </div>
    );
}
