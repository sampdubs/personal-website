import classNames from 'classnames';
import styles from './bio-section.module.scss';
import headshotUrl from "../../assets/Headshot.jpeg";

export interface BioSectionProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const BioSection = ({ className }: BioSectionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['project-div']}>
                <div className={styles['bio-text-container']}>
                    <h2>About me</h2>
                    <p className={styles['project-description']}>
                        I love learning new things! I've been curious my whole life and I plan to keep learning. I started coding in fifth grade, and continue to discover new ways to use computers to solve problems. The possibilities are endless, and I hope to find a company where I can explore these possibilities and help create something new.</p>
                    <h3>Education and Experience</h3>
                    <p className={styles['project-description']}>
                        While in high school, I was dual enrolled at Georgia Tech, where I explored Linear Algebra, Multivariable Calculus, and Object-Oriented Programming. This fall, I'm taking a class on the mathematical theory of computer science, and I'm excited to dive deeper into CS in the Winter and Spring quarters.<br />
                        Outside of school, I worked as the Electrical and Programming lead in my robotics club, then rose to Head of Engineering in my senior year. I gained valuable programming experience and learned how to coordinate larger projects and handle many moving parts. I also interned with the CDC, where I used natural language processing (NLP) to investigate and find connections in medical publications. I also took on many personal projects to teach myself more. You can check out some of these below!</p></div>
                <div className={styles['image-wrapper']}>
                    <img
                        src={headshotUrl}
                        alt=""
                        className={styles['project-img']}
                    />
                </div>
            </div>
        </div>
    );
};
