'use client';

import { ArrowRight as LogoArrowRight } from '../SVGs/ArrowRight';
import { Newspaper as LogoNewspaper } from '../SVGs/Newspaper';
import { useInfinityScroll } from '@/hooks/useInfinityScroll';
import { news } from '@/data/news';

import styles from '../../stylesheets/components/NewsComponentsStyles/NewsLinks.module.scss';
import Link from 'next/link';

export const NewsLinks: React.FC = () => {
  const dataLength = Object.keys(news).length;
  const { infinitySlice } = useInfinityScroll(dataLength);

  return (
    <div className={styles.container}>
      {Object.keys(news)
        .sort((a, b) => b.localeCompare(a))
        .slice(0, infinitySlice)
        .map((year) => {
          return (
            <div className={styles.linksWrapper} key={year}>
              <div className={styles.linksYearWrapper}>
                <span className={styles.linksHeading}>{year}</span>
                {Object.keys(news[year]).map((event) => {
                  const { title } = news[year][event];

                  return (
                    <div className={styles.linkWrapper} key={title}>
                      <LogoNewspaper />
                      <p title={title} className={styles.linkTitle}>
                        {title}
                      </p>
                      <Link className={styles.link} href={`noticias/${year}/${event}`}>
                        Saiba Mais
                        <div className={styles.arrowWrapper}>
                          <LogoArrowRight />
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};
