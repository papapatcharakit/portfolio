import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "EEG - Based Biometric System Using Deep Learning",
    imgSrc: "project-imgs/eeg.png",
    code: "https://github.com/papapatcharakit/eeg-based-biometric-identification-system-using-deep-learning-algorithm.git",
    tech: ["TensorFlow", "Python", "Neuroscience", "Image Processing", "Deep Learning"],
    description:
      "Study and develop a new biometric system using brain wave signals and deep learning for a personal identity recognition system.",
    modalContent: (
      <>
        <p>
          Brain Biometrics provides a number of benefits over more conventional biometrics such as fingerprints or iris recognition. This is because the Electroencephalographic (EEG) signal changes according to the anatomy of the individual&apos;s brain. Additionally, it is associated with a person&apos;s memory, temperament, stress level, and mental state. EEG is unique and is almost impossible to forge.
        </p>
        <p>
          The primary objective of this project is to analyze the characteristics of EEG signals and develop an innovative biometric system that leverages the benefits of brain signals. The ultimate goal is to establish an authentication method that surpasses existing systems
          in terms of both efficiency and security.
        </p>
      </>
    ),
  },
  {
    title: "Q&A System ",
    imgSrc: "project-imgs/qa__.png",
    code: "https://github.com/papapatcharakit/telecom-qa-app-backend.git",
    tech: ["PyTorch", "Python", "FastAPI", "MySQL", "Docker", "GCP", "NLP"],
    description:
      "Develop a Thai question-answering system utilizing BERT and launch it in production, aimed at introducing information about the Department of Telecommunication Engineering, KMITL.",
    modalContent: (
      <>
        <p>
          In this project, I have designed a Thai question-answering system specifically tailored to provide information pertaining to the Department of Telecommunication Engineering at KMITL.
        </p>
        <p>
          The motivation behind this project arose from the challenges faced in finding relevant information from numerous curriculum books regarding Department courses, including details on credits and compulsory subjects. Consequently, I developed this system to simplify the process for users in accessing such information.
        </p>
      </>
    ),
  },
  {
    title: "ChatGPT Clone",
    imgSrc: "project-imgs/ScreenShot.png",
    code: "https://github.com/papapatcharakit/chatgpt-clone",
    tech: ["React", "NextJS", "OpenAI"],
    description:
      "ChatGPT clone with my own Thai question-answerer web service. ",
    modalContent: (
      <>
        <p>
        The main purpose of this project is to learn and practice my website-making skills. With this in mind, I have embarked on creating a website by cloning the ChatGPT platform. Additionally, I have integrated my own Thai question-answerer API, which is specifically designed to provide information related to the Department of Telecommunication Engineering at KMITL. This API is incorporated into my cloned ChatGPT.
        </p>
      </>
    ),
  },

];
