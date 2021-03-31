import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/CompletedChallenge.module.css'

export function CompletedChallenge() {
    const { challengesCompleted } = useContext(ChallengesContext)

    return (
        <div className={`${styles.completedChallengeContainer} animate__animated animate__slideInLeft`}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}