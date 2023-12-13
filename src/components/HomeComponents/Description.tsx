import { Fragment } from 'react';

import styles from '../../stylesheets/components/HomeComponentsStyles/Description.module.scss';

export const Description: React.FC<{ heading: string; text: string }> = ({ heading, text }) => {
  const parseText = (descriptionText: string) => {
    return descriptionText.split(' ').map((word, idx) => {
      if (word.startsWith('@')) {
        const isLastWord = word.endsWith('.');
        const username = !isLastWord ? word.slice(1) : word.slice(1, word.length - 1);

        return (
          <Fragment key={idx}>
            <a className={styles.userLink} href={`https://www.instagram.com/${username}`}>
              @{username}
            </a>
            {!isLastWord ? ' ' : '. '}
          </Fragment>
        );
      }

      return `${word} `;
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.text}>{parseText(text)}</p>
    </div>
  );
};
