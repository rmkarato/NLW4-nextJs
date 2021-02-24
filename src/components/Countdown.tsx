import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export default function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setisActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountdown() {
    setisActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setisActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setisActive(false);
      startNewChallenge();
    }
  }, [isActive, time])

  return (
    <div>
      <div className={styles.countDownContainer}>
        <div>
          <span> {minuteLeft} </span>
          <span> {minuteRight} </span>
        </div>
          <span> : </span>
        <div>
          <span> {secondLeft} </span>
          <span> {secondRight} </span>
        </div>
      </div>

      { hasFinished ? (
        <button 
          disabled
          type="button" 
          className={styles.startCountdownButton}
        >
          Ciclo Encerrado
        </button>
      ) : (
        <>
          { isActive ? (
            <button 
              type="button" 
              className={`${styles.startCountdownButton} ${styles.startCountdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar Ciclo
            </button>
          ) : (
            <button 
              type="button" 
              className={styles.startCountdownButton}
              onClick={startCountdown}
            >
              Iniciar um Ciclo
            </button>
          ) }
        </>
      )}
    </div>
  )
}