import styles from '../../stylesheets/components/HomeComponentsStyles/Description.module.scss';

export const Description: React.FC<{ heading: string; text: string }> = ({ heading, text }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
