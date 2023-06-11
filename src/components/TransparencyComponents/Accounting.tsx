import { ArrowRight as LogoArrowRight } from '../SVGs/ArrowRight';
import { PDF as LogoPDF } from '../SVGs/PDF';

import styles from '../../stylesheets/components/TransparencyComponentsStyles/Accounting.module.scss';
import Link from 'next/link';

export const Accounting: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.councilWrapper}>
        <div className={styles.detailWrapper}>
          <h2 className={styles.heading}>CONSELHO DIRETOR</h2>
          <div className={styles.nameWrapper}>
            <p className={styles.name}>
              <span className={styles.boldName}>Guaraciara Pouzada de Lavor Lopes</span> -
              Presidente
            </p>
            <p className={styles.name}>
              <span className={styles.boldName}>Maria Helena Costa Mendes</span> - Vice-Presidente
            </p>
            <p className={styles.name}>
              <span className={styles.boldName}>Ivete Marinho Fernandes</span> - 1ª Secretária
            </p>
            <p className={styles.name}>
              <span className={styles.boldName}>Solange Jacob Whehaibe</span> - 2º Secretário
            </p>
            <p className={styles.name}>
              <span className={styles.boldName}>Dalmo Moreira de Paula</span> - 1º Tesoureiro
            </p>
            <p className={styles.name}>
              <span className={styles.boldName}>Gilson Francisco Carmo de Oliveira</span> - 2º
              Tesoureiro
            </p>
          </div>
        </div>
        <div className={styles.detailWrapper}>
          <h2 className={styles.heading}>CONSELHO FISCAL</h2>
          <div className={styles.nameWrapper}>
            <p className={styles.boldName}>Helia Lucia Dacol</p>
            <p className={styles.boldName}>Karollyn Marta Guedes Rocha</p>
            <p className={styles.boldName}>Rosa Maria Pinho Silva</p>
          </div>
        </div>
        <div className={styles.detailWrapper}>
          <h2 className={styles.heading}>CONSELHO CONSULTIVO</h2>
          <div className={styles.nameWrapper}>
            <p className={styles.boldName}>Adriana Guedes de Oliveira</p>
            <p className={styles.boldName}>Paloma de Lavor Lopes</p>
            <p className={styles.boldName}>Maria do Carmo Carbogim Maciel</p>
            <p className={styles.boldName}>Lucimar de Caires Silva de Carvalho</p>
            <p className={styles.boldName}>Adriele Medeiros Gama</p>
            <p className={styles.boldName}>Antônio Lopes Ferreira</p>
          </div>
        </div>
      </div>
      <div className={styles.statuteWrapper}>
        <h2 className={styles.heading}>ATA E ESTATUTO</h2>
        <div className={styles.links}>
          <div className={styles.linkWrapper}>
            <LogoPDF />
            <p className={styles.linkText}>Estatuto Social</p>
            <Link
              className={styles.link}
              href='https://drive.google.com/file/d/1-7eTFknnzt7iG5oGapsRd1mVZjQZUMnN/view?usp=sharing'
            >
              FAZER DOWNLOAD
              <div className={styles.arrowWrapper}>
                <LogoArrowRight />
              </div>
            </Link>
          </div>
          <div className={styles.linkWrapper}>
            <LogoPDF />
            <p className={styles.linkText}>Ata De Eleição</p>
            <Link
              className={styles.link}
              href='https://drive.google.com/drive/folders/18SiyqddYkTf5wFP5DMny1Xc6tax6Aep_?usp=sharing'
            >
              FAZER DOWNLOAD
              <div className={styles.arrowWrapper}>
                <LogoArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.accountingWrapper}>
        <h2 className={styles.heading}>RELATÓRIOS INSTITUCIONAIS</h2>
        <div className={styles.links}>
          <div className={styles.linkWrapper}>
            <LogoPDF />
            <p className={styles.linkText}>Balanço Patrimonial</p>
            <Link
              className={styles.link}
              href='https://drive.google.com/drive/folders/1kTs0wMODlPdZIwHkAwtLAJBWuZcMnfQe?usp=sharing'
            >
              FAZER DOWNLOAD
              <div className={styles.arrowWrapper}>
                <LogoArrowRight />
              </div>
            </Link>
          </div>
          <div className={styles.linkWrapper}>
            <LogoPDF />
            <p className={styles.linkText}>Relatório de Atividades</p>
            <Link
              className={styles.link}
              href='https://drive.google.com/drive/folders/1jWn85htsG0iMv1SmYBPYgsqhP9pA7S9V?usp=sharing'
            >
              FAZER DOWNLOAD
              <div className={styles.arrowWrapper}>
                <LogoArrowRight />
              </div>
            </Link>
          </div>
          <div className={styles.linkWrapper}>
            <LogoPDF />
            <p className={styles.linkText}>Demonstrativo Financeiro</p>
            <Link
              className={styles.link}
              href='https://drive.google.com/drive/folders/1o92DEBIfX1xkZiNh7qnxmqzg92PFnZ5s?usp=sharing'
            >
              FAZER DOWNLOAD
              <div className={styles.arrowWrapper}>
                <LogoArrowRight />
              </div>
            </Link>
          </div>
          <div className={styles.linkWrapper}>
            <LogoPDF />
            <p className={styles.linkText}>Convênios e Parcerias</p>
            <Link
              className={styles.link}
              href='https://drive.google.com/drive/folders/1M5ZyO8YX4F1DYFsPIvEw-c86mqQQx2hZ?usp=sharing'
            >
              FAZER DOWNLOAD
              <div className={styles.arrowWrapper}>
                <LogoArrowRight />
              </div>
            </Link>
          </div>
          <div className={styles.linkWrapper}>
            <LogoPDF />
            <p className={styles.linkText}>Publicação E-Transparente</p>
            <Link
              className={styles.link}
              href='https://etransparente.org/oscs/casa-da-crianca-e-do-adolescente/'
            >
              FAZER DOWNLOAD
              <div className={styles.arrowWrapper}>
                <LogoArrowRight />
              </div>
            </Link>
          </div>
          <div className={styles.linkWrapper}>
            <LogoPDF />
            <p className={styles.linkText}>Prestação de Contas</p>
            <Link
              className={styles.link}
              href='https://drive.google.com/drive/folders/1rmMsjTU12fIxCM4_Xdpb6ez5bfku6f7g?usp=sharing'
            >
              FAZER DOWNLOAD
              <div className={styles.arrowWrapper}>
                <LogoArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
