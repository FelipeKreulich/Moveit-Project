import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import { GetServerSideProps } from "next";

import styles from "../styles/pages/Home.module.css";
import { CompletedChallenge } from "../components/CompletedChallenge";
import { Countdown } from "../components/Countdown";

import Head from "next/head";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengeProvider } from "../contexts/ChallengeContext";

import { Login } from "../components/Login";
import { useEffect, useState } from "react";

import styless from "../styles/components/Login.module.css";
interface HomeProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export default function Home(props: HomeProps) {
    const [getLogin, setLogin] = useState(null);

    useEffect(() => {
        setLogin(JSON.parse(localStorage.getItem("login") || null));
    }, []);

    return (
        <ChallengeProvider
            level={props.level}
            currentExperience={props.currentExperience}
            challengesCompleted={props.challengesCompleted}
        >
            {getLogin ? (
                <div
                    className={`${styles.container} animate__animated animate__fadeIn`}
                >
                    <Head>
                        <title>Início | Move.it</title>
                    </Head>

                    <ExperienceBar />

                    <CountdownProvider>
                        <section>
                            <div>
                                <Profile />
                                <CompletedChallenge />
                                <Countdown />
                            </div>
                            <div>
                                <ChallengeBox />
                            </div>
                        </section>
                    </CountdownProvider>
                </div>
            ) : (
                <div className={styless.container}>
                    <Login />
                </div>
            )}
        </ChallengeProvider>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted),
        },
    };
};
