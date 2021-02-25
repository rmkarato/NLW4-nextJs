import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/63520542?s=400&u=d365844d2ffe2c1b3ea763d3967e1d33bd751ee1&v=4" alt="Photo Profile" />
			<div>
				<strong> Renata Karato </strong>
				<p> 
					<img src="icons/level.svg" alt="Level" />
					Level {level} 
				</p>
			</div>
		</div>
  );
}