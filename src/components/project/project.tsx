import classNames from 'classnames';
import styles from './project.module.scss';

export interface ProjectProps {
    className?: string;
    image: string;
    title: string;
    description: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Project = ({ className, image, description, title }: ProjectProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['project-div']}>
                <img
                    src={image}
                    alt=""
                    className={styles['project-img']}
                    width="400"
                />
                <div className={styles['project-text']}>
                    <h1>{title}</h1>
                    <p className={styles['project-description']}>{description}</p></div></div>
        </div>
    );
};
