'use client';

import { ArrowRight as LogoArrowRight } from '../SVGs/ArrowRight';
import { Newspaper as LogoNewspaper } from '../SVGs/Newspaper';
import { useInfinityScroll } from '@/hooks/useInfinityScroll';
import type { GroupedNews } from '@/data-access/news';
import { Fragment } from 'react';

import styles from '../../stylesheets/components/NewsComponentsStyles/NewsLinks.module.scss';
import Link from 'next/link';

export const NewsLinks = ({ news }: { news: GroupedNews }) => {
  const { infinitySlice } = useInfinityScroll(Object.keys(news).length);

  return (
    <div className={styles.container}>
      {Object.keys(news)
        .reverse()
        .slice(0, infinitySlice)
        .map((year) => {
          return (
            <div className={styles.linksWrapper} key={year}>
              <div className={styles.linksYearWrapper}>
                <span className={styles.linksHeading}>{year}</span>
                {Object.keys(news[year]).map((month) => (
                  <Fragment key={month}>
                    <span className={styles.month}>{month}</span>
                    <div className={styles.monthWrapper}>
                      {news[year][month].map(({ id, title }) => (
                        <div className={styles.linkWrapper} key={title}>
                          <LogoNewspaper />
                          <p title={title} className={styles.linkTitle}>
                            {title}
                          </p>
                          <Link className={styles.link} href={`noticias/${id}`}>
                            Saiba Mais
                            <div className={styles.arrowWrapper}>
                              <LogoArrowRight />
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </Fragment>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};
