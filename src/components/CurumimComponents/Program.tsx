'use client';

import { ArrowRight as LogoArrowRight } from '../SVGs/ArrowRight';
import { Instagram as LogoInstagram } from '../SVGs/Instagram';
import { Donation as LogoDonation } from '../SVGs/Donation';
import { useWindowSize } from '@/hooks/useWindowSize';

import styles from '../../stylesheets/components/CurumimComponentsStyles/Program.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export const Program = () => {
  const { isSmallerThanLimit, windowWidth } = useWindowSize(1400);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Acolhimento e Inclusão para Crianças em Risco Social</h2>
      <div className={styles.descriptionWrapper}>
        {isSmallerThanLimit
          ? windowWidth >= 1100 && (
              <p className={styles.text}>
                O Programa de Curumim foi criado para atender crianças em situação de
                vulnerabilidade social, oferecendo atividades lúdico-pedagógicas durante o contra
                turno escolar. Nosso objetivo é oferecer um ambiente acolhedor, onde as crianças
                possam se sentir seguras e desenvolver suas habilidades e talentos.
              </p>
            )
          : null}
        <div className={styles.logoWrapper}>
          <div className={styles.textWrapper}>
            {(!isSmallerThanLimit || windowWidth < 1100) && (
              <p className={styles.text}>
                O Programa de Curumim foi criado para atender crianças em situação de
                vulnerabilidade social, oferecendo atividades lúdico-pedagógicas durante o contra
                turno escolar. Nosso objetivo é oferecer um ambiente acolhedor, onde as crianças
                possam se sentir seguras e desenvolver suas habilidades e talentos.
              </p>
            )}

            <p className={styles.text}>
              Sabemos que a prática de atividades físicas e artísticas é fundamental para o
              desenvolvimento saudável das crianças, e por isso, incluímos essas atividades em nossa
              programação. Além disso, nossa equipe de profissionais está sempre buscando se
              aprimorar para oferecer um atendimento de qualidade e inclusivo.
            </p>
            <p className={styles.text}>
              Acreditamos que todas as crianças, independentemente de suas condições físicas ou
              sociais, merecem ter acesso a um ambiente seguro e enriquecedor. Por isso, estamos
              comprometidos em oferecer um atendimento inclusivo e, assim, estamos trabalhando para
              nos capacitar para receber crianças com deficiência em nossas atividades.
            </p>
          </div>
          <Image
            width={160}
            height={160}
            alt='logo-curumim'
            className={styles.logoCurumim}
            src='/logos/svgs/institution/logoCurumim.svg'
          />
        </div>
        <p className={styles.text}>
          Nosso projeto é uma forma concreta de contribuir para um futuro mais justo e equilibrado,
          onde todas as crianças tenham a oportunidade de desenvolver seu potencial.
        </p>
      </div>
      <h2 className={styles.heading}>Galeria de Fotos do Programa Curumim</h2>
      <div></div>

      <h2 className={styles.heading}>Apoie-nos e nos Acompanhe no Instagram</h2>
      <div className={styles.links}>
        <div className={styles.linkWrapper}>
          <LogoDonation />
          <p className={styles.linkText}>Apoie o Programa Curumim</p>
          <Link className={styles.link} href='https://www.instagram.com/p/CgndXgnr6nm/'>
            ACESSE JÁ
            <div className={styles.arrowWrapper}>
              <LogoArrowRight />
            </div>
          </Link>
        </div>
        <div className={styles.linkWrapper}>
          <LogoInstagram />
          <p className={styles.linkText}>Siga o Programa Curumim no Instagram</p>
          <Link className={styles.link} href='https://www.instagram.com/programacurumim.vr/'>
            ACESSE JÁ
            <div className={styles.arrowWrapper}>
              <LogoArrowRight />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
