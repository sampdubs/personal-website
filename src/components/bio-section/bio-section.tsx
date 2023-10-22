import classNames from 'classnames';
import styles from './bio-section.module.scss';

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
                <div className={styles['image-wrapper']}>
                    <img
                        src="/src/assets/Headshot.jpeg"
                        alt=""
                        className={styles['project-img']}
                    />
                </div>
                <div className={styles['bio-text-container']}>
                    <h2>About me</h2>
                    <p className={styles['project-description']}>
                        I love learning new things! I've been curious my whole life and I plan to keep learning. I started coding in fifth grade, and continue to discover new ways to use computers to solve problems. The possibilities are endless, and I hope to find a company where I can explore those possibilities and help create something new.</p>
                    <h3>Education and Experience</h3>
                    <p className={styles['project-description']}>
                        In high school, I participated in dual enrollment at Georgia Tech, where I took Linear Algebra, Multivariable Calculus, and Object Oriented Programming. These classes reinforced that I was interested in CS and math. Currently at Stanford, I am taking a math theory of CS class in Fall quarter, and plan to continue to take CS classes through Winter and Spring quarters.<br />
                        Outside of school, I gained much programming experience through my robotics team, where I was the Electrical and Programming lead and subsequently Head of Engineering. In these roles, I learned how to coordinate larger projects and handle many moving parts. I participated in an internship with the CDC that used natural language processing (NLP) to investigate and find connections in medical publications. I also took on many personal projects to explore programming and teach myself more. You can explore some of these below!</p></div></div>
        </div>
    );
};
