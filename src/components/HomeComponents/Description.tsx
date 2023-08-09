'use client';

import { useEffect, useState } from 'react';

import styles from '../../stylesheets/components/HomeComponentsStyles/Description.module.scss';

export const Description: React.FC<{ heading: string; text: string }> = ({ heading, text }) => {
  const [isMounted, setIsMounted] = useState(false);
  let usernameCount = 0;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>{heading}</h2>
      {isMounted ? (
        <p className={styles.text}>
          {text.split('').map((char, idx) => {
            if (char === '@') {
              let current = idx + 1;
              let username = '';

              while (text[current] !== ' ' && current !== text.length - 1) {
                username += text[current];
                current++;
              }

              usernameCount = username.length;
              return (
                <a
                  key={username}
                  className={styles.userLink}
                  href={`https://www.instagram.com/${username}`}
                >
                  @{username}
                </a>
              );
            }

            usernameCount--;
            return usernameCount >= 0 ? [] : char;
          })}
        </p>
      ) : null}
    </div>
  );
};
