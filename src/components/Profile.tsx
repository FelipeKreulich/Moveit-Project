import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../contexts/ChallengeContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
    const handleLogout = () => {
        localStorage.removeItem("login");
        window.location.reload();
    };

    const [profile, setProfile] = useState(null);

    useEffect(() => {
        setProfile(JSON.parse(localStorage.getItem("login")));
    }, []);

    const { level } = useContext(ChallengesContext);

    return (
        <div
            className={`${styles.profileContainer} animate__animated animate__slideInDown`}
        >
            <img src={profile?.avatar} alt="Felipe Kreulich" />
            <div>
                <strong>{profile?.name}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                    <button
                        type="button"
                        onClick={handleLogout}
                        className={styles.btnLogout}
                    >
                        SAIR
                    </button>
                </p>
            </div>
        </div>
    );
}
