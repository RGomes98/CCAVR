import React, { Fragment } from 'react';
import Image from 'next/image';
import { ArrowRight as LogoArrowRight } from '../SVGs/ArrowRight';
import { PDF as LogoPDF } from '../SVGs/PDF';

import styles from '../../stylesheets/components/TransparencyComponentsStyles/Accounting.module.scss';

const termsData = [
  {
    id: 'termo-fomento-nf',
    number: '220/2024',
    noticeData:
      'Projeto Evoluir (Nova Friburgo) - Incremento Temporário ao Custeio de Serviços de Assistência Hospitalar e Ambulatorial – Incremento MAC',
    publicationDate: '10/09/2024',
    status: 'Concluído',
    totalValue: '650.000,00',
    unitPrices: '54.166,66',
    seiProcess: 'Processo Administrativo n. 18.999/2024',
    validity: '10/09/2024 a 10/09/2025',
    termExtractLink: 'https://etransparente.org/wp-content/uploads/2025/02/TERMO-DE-FOMENTO-EVOLUIR.pdf',
    addendums: [],
    documents: [],
  },
  {
    id: 'termo-782-2022',
    number: '782/2022',
    noticeData: 'Edital de Chamamento Público FIA/RJ nº 005/2021',
    publicationDate: '24/05/2022',
    status: 'Ativo',
    totalValue: '5.910.268,32',
    unitPrices: '123.130,59',
    seiProcess: 'SEI-310005/000346/2021',
    validity: '21/05/2022 a 21/05/2026',
    termExtractLink:
      'https://etransparente.org/wp-content/uploads/2023/09/TERMO_DE_COLABORACAO___782_20223893470-1-23.IDC-Casa-da-Crianca-e-do-Adolescente-1.pdf',
    addendums: [
      {
        totalValue: '1.477.567,08',
        seiProcess: 'SEI-310005/000263/2022',
        extractLink:
          'https://etransparente.org/wp-content/uploads/2025/07/TERMO-ADITIVO-E-DE-COLABORACAO-782-2022-NACA-IDC.pdf',
      },
    ],
    documents: [
      {
        name: 'Relatório de Execução Físico-Financeira',
        link: 'https://etransparente.org/wp-content/uploads/2026/04/aradrelfisicofinancorrente.pdf',
      },
      {
        name: 'Demonstrativo Execução Receita/Despesa',
        link: 'https://etransparente.org/wp-content/uploads/2026/04/aradrelexecrecdesp-1.pdf',
      },
      {
        name: 'Relação de pagamentos',
        link: 'https://etransparente.org/wp-content/uploads/2026/04/IDC-RELACAO-DE-PAGAMENTOS-NACA-15.04.2026.pdf',
      },
      {
        name: 'Extrato bancário completo',
        link: 'https://etransparente.org/wp-content/uploads/2026/04/NACA_EXTRATO_BANCARIO_MAIO22_A_MAR26.pdf',
      },
      {
        name: 'Relação de bens adquiridos',
        link: 'https://etransparente.org/wp-content/uploads/2026/04/aadrelbensadquiridos-1.pdf',
      },
    ],
  },
  {
    id: 'termo-1008-2023',
    number: '1008/2023',
    noticeData:
      'Programa de Atenção à Criança e ao Adolescente em Situação de Risco - Edital de Chamamento Público FIA/RJ nº 001/2022',
    publicationDate: '04/04/2024',
    status: 'Ativo',
    totalValue: '1.793.801,16',
    unitPrices: '49.827,81',
    seiProcess: 'SEI-310005/001088/2023',
    validity: '25/03/2024 a 31/03/2027',
    termExtractLink:
      'https://etransparente.org/wp-content/uploads/2024/11/1008___CASA_DA_CRIANCA_E_DO_ADOLESCENTE___TERMO_E_PUBLICACAO-SEM-DADOS-1.pdf',
    addendums: [],
    documents: [
      {
        name: 'Relatório de Execução Físico-Financeira',
        link: 'https://etransparente.org/wp-content/uploads/2025/04/RELATORIO-FISICO-FINANCEIRO-CORRENTE-1.pdf',
      },
      {
        name: 'Demonstrativo Execução Receita/Despesa',
        link: 'https://etransparente.org/wp-content/uploads/2025/04/DEMONSTRATIVO-DA-EXECUCAO-DA-RECEITA-E-DESPESA-1.pdf',
      },
      {
        name: 'Relação de pagamentos',
        link: 'https://etransparente.org/wp-content/uploads/2025/04/RELACAO-DE-PAGAMENTOS-CONV-1008-1.pdf',
      },
      {
        name: 'Extrato bancário completo',
        link: 'https://etransparente.org/wp-content/uploads/2025/04/EXTRATO-CURUMIM-249-19.01.2024-ATE-04.04.2025.pdf',
      },
      {
        name: 'Relação de bens adquiridos',
        link: 'https://etransparente.org/wp-content/uploads/2025/04/RELACAO-DE-BENS_compressed.pdf',
      },
    ],
  },
  {
    id: 'termo-1137-1008-2023',
    number: '1137-1008/2023',
    noticeData:
      'Programa de Atenção à Criança e ao Adolescente em Situação de Risco - Projeto Curumim - Secretaria de Estado da Casa Civil',
    publicationDate: '31/03/2025',
    status: 'Ativo',
    totalValue: '1.345.350,87',
    unitPrices: '49.827,81',
    seiProcess: 'SEI-310005/001088/2023',
    validity: '21/03/2025 a 31/03/2027',
    termExtractLink:
      'https://etransparente.org/wp-content/uploads/2025/05/TERMO-1008.1137-CURUMIM-249-IDC.pdf',
    addendums: [],
    documents: [
      {
        name: 'Relatório de Execução Físico-Financeira',
        link: 'https://etransparente.org/wp-content/uploads/2026/03/aadrelfisicofinanceirocorrpcf-1.pdf',
      },
      {
        name: 'Demonstrativo Execução Receita/Despesa',
        link: 'https://etransparente.org/wp-content/uploads/2026/03/aradrelexecrecdesp-4-IDC.pdf',
      },
      {
        name: 'Relação de pagamentos',
        link: 'https://etransparente.org/wp-content/uploads/2026/03/Relacao-de-pagamentos.pdf',
      },
      {
        name: 'Extrato bancário completo',
        link: 'https://etransparente.org/wp-content/uploads/2026/03/EXTRATO-BANCARIO-0368888-7-MAIO24-A-30.03.2026.pdf',
      },
      {
        name: 'Relação de bens adquiridos',
        link: 'https://etransparente.org/wp-content/uploads/2026/03/aadrelbensadquiridos-30.03.2026.pdf',
      },
    ],
  },
];

export const Accounting: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image
        width={380}
        height={380}
        alt='logo-cca'
        className={styles.primaryLogo}
        src='/logos/svgs/institution/logoCCA.svg'
      />

      <div className={styles.agreementsWrapper}>
        <h2 className={styles.mainHeading}>CONVÊNIOS E PARCERIAS</h2>

        <div className={styles.termCardsContainer}>
          {termsData.map((term) => (
            <div key={term.id} className={styles.termCard}>
              <h3 className={styles.termTitle}>Termo nº {term.number}</h3>

              <div className={styles.termDetailsLayout}>
                <div className={styles.termTextGroup}>
                  <p>
                    <span className={styles.boldName}>Dados do Edital:</span> {term.noticeData}
                  </p>
                  <p>
                    <span className={styles.boldName}>Data de publicação:</span> {term.publicationDate}
                  </p>
                </div>

                <div className={styles.termTextGroup}>
                  <p className={styles.subHeading}>Dados do Termo:</p>
                  <p>
                    <span className={styles.boldName}>Situação do termo:</span> {term.status}
                  </p>
                  <p>
                    <span className={styles.boldName}>Valor Total:</span> R$ {term.totalValue}
                  </p>
                  <p>
                    <span className={styles.boldName}>Preços unitários:</span> {`R$ ${term.unitPrices}`}{' '}
                    (valor mensal)
                  </p>
                  <p>
                    <span className={styles.boldName}>Processo SEI:</span> {term.seiProcess}
                  </p>
                  <p>
                    <span className={styles.boldName}>Vigência:</span> {term.validity}
                  </p>
                </div>

                <div className={styles.actionLink}>
                  <a href={term.termExtractLink} target='_blank' rel='noreferrer'>
                    <LogoPDF className={styles.smallPdfIcon} /> Extrato de publicação do termo (PDF)
                  </a>
                </div>

                {term.addendums && term.addendums.length > 0 && (
                  <div className={styles.addendumGroup}>
                    <p className={styles.subHeading}>Termo Aditivo:</p>
                    {term.addendums.map((addendum, idx) => (
                      <div key={idx} className={styles.addendumItem}>
                        <p>
                          <span className={styles.boldName}>Valor Total:</span> R$ {addendum.totalValue}
                        </p>
                        <p>
                          <span className={styles.boldName}>Processo SEI:</span> {addendum.seiProcess}
                        </p>
                        <div className={styles.actionLink}>
                          <a href={addendum.extractLink} target='_blank' rel='noreferrer'>
                            <LogoPDF className={styles.smallPdfIcon} /> Extrato de publicação do termo (PDF)
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {term.documents.length > 0 && (
                <Fragment>
                  <h4 className={styles.documentsHeading}>Documentos do Termo</h4>
                  <div className={styles.termLinksGrid}>
                    {term.documents.map((doc, index) => (
                      <div key={index} className={styles.smallLinkWrapper}>
                        <LogoPDF className={styles.termPDF} />
                        <p className={styles.smallLinkText}>{doc.name}</p>
                        <a className={styles.link} href={doc.link} target='_blank' rel='noreferrer'>
                          ACESSAR{' '}
                          <div className={styles.arrowWrapper}>
                            <LogoArrowRight />
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </Fragment>
              )}
            </div>
          ))}
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.sectionWrapper}>
        <h2 className={styles.heading}>Dados da entidade:</h2>
        <div className={styles.entityDetails}>
          <p>
            <span className={styles.boldName}>Nome:</span> CASA DA CRIANÇA E DO ADOLESCENTE
          </p>
          <p>
            <span className={styles.boldName}>Endereço:</span> Rua 21, n 34, Vila Santa Cecília, Volta Redonda
            - Rio de Janeiro, 27260-280
          </p>
          <p>
            <span className={styles.boldName}>CNPJ:</span> 01.375.045/0001-03
          </p>
          <div className={styles.spacingTop}>
            <p className={styles.subHeading}>Objeto Social:</p>
            <p>
              Somos uma entidade de atendimento, promoção, prevenção e proteção básica as crianças,
              adolescentes e jovens.
            </p>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.councilWrapper}>
        <div className={styles.detailWrapper}>
          <h2 className={styles.heading}>Qualificação completa dos integrantes da administração:</h2>
          <div className={styles.nameWrapper}>
            <p className={styles.name}>
              <span className={styles.boldName}>Presidente:</span> Guaraciara Pouzada de Lavor Lopes
            </p>
            <p className={styles.name}>
              <span className={styles.boldName}>Vice-Presidente:</span> Maria Helena Costa Mendes
            </p>
            <p className={styles.name}>
              <span className={styles.boldName}>1ª Secretária:</span> Michele da Silva Ribeiro
            </p>
            <p className={styles.name}>
              <span className={styles.boldName}>2º Secretário:</span> Solange Jacob Whehaibe
            </p>
            <p className={styles.name}>
              <span className={styles.boldName}>1º Tesoureiro:</span> Dalmo Moreira de Paula
            </p>
            <p className={styles.name}>
              <span className={styles.boldName}>2º Tesoureiro:</span> Gilson Francisco Carmo de Oliveira
            </p>
          </div>
        </div>

        <div className={styles.detailWrapper}>
          <h2 className={styles.heading}>Qualificação completa dos integrantes do conselho fiscal:</h2>
          <div className={styles.nameWrapper}>
            <p className={styles.name}>
              <span className={styles.boldName}>Presidente:</span> Sônia Maria Freitas
            </p>
            <p className={styles.name}>
              <span className={styles.boldName}>Secretário:</span> Karollyn Marta Guedes Rocha
            </p>
            <p className={styles.name}>
              <span className={styles.boldName}>Membro:</span> Eliane Cristina Fialho
            </p>
          </div>
        </div>

        <div className={styles.detailWrapper}>
          <h2 className={styles.heading}>Qualificação completa dos integrantes do conselho consultivo:</h2>
          <div className={styles.nameWrapper}>
            <p className={styles.name}>Adriana Guedes de Oliveira</p>
            <p className={styles.name}>Paloma de Lavor Lopes</p>
            <p className={styles.name}>Maria do Carmo Carbogim Maciel</p>
            <p className={styles.name}>Lucimar de Caires Silva de Carvalho</p>
            <p className={styles.name}>Adriele Medeiros Gama</p>
            <p className={styles.name}>Joselito Magalhães</p>
          </div>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.statuteWrapper}>
        <h2 className={styles.heading}>Balanços Contábeis e Estatuto Institucional:</h2>
        <div className={styles.links}>
          <div className={styles.linkWrapper}>
            <LogoPDF />
            <p className={styles.linkText}>Balanço Contábil 2024</p>
            <a
              className={styles.link}
              href='https://etransparente.org/wp-content/uploads/listing-uploads/balano-contbil-lei-estadual-5981/2025/06/BALANCO-PATRIMONIAL-2024-CCA-site-1.pdf'
              target='_blank'
              rel='noreferrer'
            >
              FAZER DOWNLOAD{' '}
              <div className={styles.arrowWrapper}>
                <LogoArrowRight />
              </div>
            </a>
          </div>

          <div className={styles.linkWrapper}>
            <LogoPDF />
            <p className={styles.linkText}>Ata de Eleição</p>
            <a
              className={styles.link}
              href='https://drive.google.com/drive/folders/18SiyqddYkTf5wFP5DMny1Xc6tax6Aep_?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              FAZER DOWNLOAD{' '}
              <div className={styles.arrowWrapper}>
                <LogoArrowRight />
              </div>
            </a>
          </div>

          <div className={styles.linkWrapper}>
            <LogoPDF />
            <p className={styles.linkText}>Estatuto Social</p>
            <a
              className={styles.link}
              href='https://drive.google.com/file/d/1-7eTFknnzt7iG5oGapsRd1mVZjQZUMnN/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              FAZER DOWNLOAD{' '}
              <div className={styles.arrowWrapper}>
                <LogoArrowRight />
              </div>
            </a>
          </div>

          <div className={styles.linkWrapper}>
            <LogoPDF />
            <p className={styles.linkText}>Relatório de Atividades</p>
            <a
              className={styles.link}
              href='https://drive.google.com/drive/folders/1jWn85htsG0iMv1SmYBPYgsqhP9pA7S9V?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              FAZER DOWNLOAD{' '}
              <div className={styles.arrowWrapper}>
                <LogoArrowRight />
              </div>
            </a>
          </div>

          <div className={styles.linkWrapper}>
            <LogoPDF />
            <p className={styles.linkText}>Demonstrativo Financeiro</p>
            <a
              className={styles.link}
              href='https://drive.google.com/drive/folders/1o92DEBIfX1xkZiNh7qnxmqzg92PFnZ5s?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              FAZER DOWNLOAD{' '}
              <div className={styles.arrowWrapper}>
                <LogoArrowRight />
              </div>
            </a>
          </div>

          <div className={styles.linkWrapper}>
            <LogoPDF />
            <p className={styles.linkText}>Convênios e Parcerias</p>
            <a
              className={styles.link}
              href='https://drive.google.com/drive/folders/1M5ZyO8YX4F1DYFsPIvEw-c86mqQQx2hZ?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              FAZER DOWNLOAD{' '}
              <div className={styles.arrowWrapper}>
                <LogoArrowRight />
              </div>
            </a>
          </div>

          <div className={styles.linkWrapper}>
            <LogoPDF />
            <p className={styles.linkText}>Publicação E-Transparente</p>
            <a
              className={styles.link}
              href='https://etransparente.org/oscs/casa-da-crianca-e-do-adolescente/'
              target='_blank'
              rel='noreferrer'
            >
              ACESSE JÁ{' '}
              <div className={styles.arrowWrapper}>
                <LogoArrowRight />
              </div>
            </a>
          </div>

          <div className={styles.linkWrapper}>
            <LogoPDF />
            <p className={styles.linkText}>Prestação de Contas</p>
            <a
              className={styles.link}
              href='https://drive.google.com/drive/folders/1rmMsjTU12fIxCM4_Xdpb6ez5bfku6f7g?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              FAZER DOWNLOAD{' '}
              <div className={styles.arrowWrapper}>
                <LogoArrowRight />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
