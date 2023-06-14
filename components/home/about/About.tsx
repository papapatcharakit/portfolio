import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hello! I&apos;m Aoey, or you can call me Patcharakit Yangdiaw 
              if you want to go for the full name, and I&apos;m excited to gat a chance to share a bit about myself with you.
              Currently, I&apos;m pursuing my bachelor&apos;s degree in Telecommunication Engineering from KMITL,
              and I&apos;m just a few months away from completing my program.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Although my studies mainly focus on telecommunications, 
              my interests reach far beyond that. I&apos;m seriously passionate about programming, 
              web and mobile development, artificial intelligence, and all those cool, futuristic technologies. 👩🏻‍💻🤖✨
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            I&apos;m an ambitious and energetic individual who is ready for hard work and eager to embrace challenges. 
            With a strong passion for self-improvement, I consistently seek out opportunities to expand my skillset and enhance my capabilities. 
            As someone who thrives in fast-paced and dynamic environments, I&apos;m able to adapt quickly and remain resilient under pressure. 
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
            I&apos;m excited by the prospect of working with like-minded individuals and am eager to contribute my dedication, drive, and resourcefulness to the team. 
            As someone who recognizes the importance of teamwork, I strive to build collaborative relationships, share my knowledge, and learn from others in order to achieve shared success.
            </p>
          </Reveal>
          
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
