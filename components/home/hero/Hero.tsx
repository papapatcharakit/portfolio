import { StandardButton } from "@/components/buttons/StandardButton";
import { Reveal } from "@/components/utils/Reveal";
import { DotGrid } from "./DotGrid";
import styles from "./hero.module.scss";
import { motion } from "framer-motion"


export const Hero = () => {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>

        <motion.h1
          initial={{ x: -70, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styles.title}>
          Hey, I&apos;m Pat<span>.</span>
        </motion.h1>

        <motion.h2
          initial={{ x: -70, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styles.subTitle}>
          I&apos;m a <span>Full Stack Developer</span>
        </motion.h2>

        <motion.p
          initial={{ x: -70, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={styles.aboutCopy}>
          Seeking a position as a Software Engineer or else, where I can apply my skills to make the most of for company along with learning new things and acquiring valuable experience over the long term.
        </motion.p>

        <motion.a
          initial={{ x: -70, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}>
          <StandardButton
            onClick={() => document.getElementById("contact")?.scrollIntoView()}>
            Contact me
          </StandardButton>
        </motion.a>
      </div>

      {/* <DotGrid /> */}
    </section>
  );
};
