import styles from "./stats.module.scss";
import { AiFillRobot, AiFillCode, AiFillSmile } from "react-icons/ai";
import { IoIosRibbon } from "react-icons/io";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Programming skills</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Python</span>
            <span className="chip">Java</span>
            <span className="chip">Kotlin</span>
            <span className="chip">Android</span>
            <span className="chip">SQL</span>
            <span className="chip">ReactJS</span>
            <span className="chip">HTML/CSS/JS</span>
            <span className="chip">C/C++</span>
            <span className="chip">GCP</span>
            <span className="chip">Docker</span>
            <span className="chip">FastAPI</span>
            <span className="chip">PyTorch/TensorFlow</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <IoIosRibbon size="2.4rem" color="var(--brand)" />
            <span>Other skills</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Machine Learning</span>
            <span className="chip">NLP</span>
            <span className="chip">Neuroscience</span>
            <span className="chip">Brain-Computer Interface</span>
            <span className="chip">Embedded System</span>
            
          </div>
        </div>
      </Reveal>
    </div>
  );
};
