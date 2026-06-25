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
    termExtractLink:
      'https://drive.google.com/drive/folders/1OSlkc-VQfV5pj__cmG8-z7_SOD25Vp_Q?usp=drive_link',
    addendums: [],
    documents: [],
  },
  {
    id: 'termo-782-2022',
    number: '782/2022',
    noticeData: 'Edital de Chamamento Público FIA/RJ nº 005/2021',
    publicationDate: '24/05/2022',
    status: 'Ativo',
    totalValue: '7.387.835,40',
    unitPrices: '123.130,59',
    seiProcess: 'SEI-310005/000346/2021',
    validity: '21/05/2022 a 21/05/2027',
    termExtractLink:
      'https://drive.google.com/drive/folders/1kaVus1W7txZ7_g2I56iHWprlWE2smtUz?usp=drive_link',
    addendums: [
      {
        totalValue: '1.477.567,08',
        seiProcess: 'SEI-310005/000263/2022',
        extractLink:
          'https://drive.google.com/drive/folders/1YwpX5K6nYaJSR07gddu2b05ERK5EfP38?usp=drive_link',
      },
    ],
    documents: [
      {
        name: 'Plano de Trabalho',
        link: 'https://drive.google.com/drive/folders/1CH9k4qYns44RzifAPIR3vqQ6i6XZIYpQ?usp=drive_link',
      },
      {
        name: 'Relatório de Execução Físico-Financeira',
        link: 'https://drive.google.com/drive/folders/1W44NCOJqqaCc3mwC6aE4Kibc85E9igkU?usp=drive_link',
      },
      {
        name: 'Demonstrativo Execução Receita/Despesa',
        link: 'https://drive.google.com/drive/folders/1i1okhF1bkY6W5ulsnt6Kh7BSCd9sTqCj?usp=drive_link',
      },
      {
        name: 'Relação de pagamentos',
        link: 'https://drive.google.com/drive/folders/18EhkChKKRzBQ2VOGctus6ynBZqycgisd?usp=drive_link',
      },
      {
        name: 'Extrato bancário completo',
        link: 'https://drive.google.com/drive/folders/11qKek9TP_G8VHlK_6Dltiz0P-1r_eL5-?usp=drive_link',
      },
      {
        name: 'Relação de bens adquiridos',
        link: 'https://drive.google.com/drive/folders/1vbX85eVCmpJ_x_i0_-12nhKFXOyeQeKd?usp=drive_link',
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
      'https://drive.google.com/drive/folders/1CHxwniNS3JwDGcPaCRxuQ2_yUryjsUda?usp=drive_link',
    addendums: [],
    documents: [
      {
        name: 'Plano de Trabalho',
        link: 'https://drive.google.com/drive/folders/1vuwXD6uksUBL_X4wTAmuC_55iifa2jqn?usp=drive_link',
      },
      {
        name: 'Relatório de Execução Físico-Financeira',
        link: 'https://drive.google.com/drive/folders/1vEQ7R1AcGQI5tNRuZ604weeR302rOQCm?usp=drive_link',
      },
      {
        name: 'Demonstrativo Execução Receita/Despesa',
        link: 'https://drive.google.com/drive/folders/131RN5R0fJF_rxPeEtIj133w7modyZA_1?usp=drive_link',
      },
      {
        name: 'Relação de pagamentos',
        link: 'https://drive.google.com/drive/folders/1ovxPUm0hoDEfsv69v3-MO0CemCBzlDi7?usp=drive_link',
      },
      {
        name: 'Extrato bancário completo',
        link: 'https://drive.google.com/drive/folders/1QX-lpO0qcDUp0_IHmYEhyi6cBePCSE-Q?usp=drive_link',
      },
      {
        name: 'Relação de bens adquiridos',
        link: 'https://drive.google.com/drive/folders/1l2snmuuqCdlnBBjthF7i7bTkbL7mWBs5?usp=drive_link',
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
      'https://drive.google.com/drive/folders/1sLPC2pWPzDfD03igMQMSt0XMBxTXXcJm?usp=drive_link',
    addendums: [],
    documents: [
      {
        name: 'Plano de Trabalho',
        link: 'https://drive.google.com/drive/folders/1J2FK9xsskIG_yhY7emkbTnjRNy10HyDV?usp=drive_link',
      },
      {
        name: 'Relatório de Execução Físico-Financeira',
        link: 'https://drive.google.com/drive/folders/1X8GTmwHPRCEGbqY4OGsDSREhOKp6Syko?usp=drive_link',
      },
      {
        name: 'Demonstrativo Execução Receita/Despesa',
        link: 'https://drive.google.com/drive/folders/1vYHXmAEm_Gu-QNOZf4Sn4XOnhA0G-HI-?usp=drive_link',
      },
      {
        name: 'Relação de pagamentos',
        link: 'https://drive.google.com/drive/folders/1AuZfTrFf7Xw8aTffm6mmH4FFyWWEIL5I?usp=drive_link',
      },
      {
        name: 'Extrato bancário completo',
        link: 'https://drive.google.com/drive/folders/1OjQm0grUuPzoQImvSSz3PKYDt_3WvTlY?usp=drive_link',
      },
      {
        name: 'Relação de bens adquiridos',
        link: 'https://drive.google.com/drive/folders/1RfJ90bqAhzf98_1cSpNtZJNOxkuwFqAU?usp=drive_link',
      },
    ],
  },
  {
    id: 'termo-1137-1008-2023-sempi',
    number: '1137-1008/2023',
    noticeData:
      'Programa de Atenção à Criança e ao Adolescente em Situação de Risco - Projeto Curumim - Secretaria de Estado Da Mulher de Políticas Inclusivas - SEMPI',
    termDescription: '2º TERMO ADITIVO AO TERMO DE COLABORAÇÃO Nº 1008/2023',
    publicationDate: '12/06/2026',
    status: 'Ativo',
    totalValue: '498.278,10',
    unitPrices: '49.827,81',
    seiProcess: 'SEI-310005/001088/2023',
    validity: '11/06/2025 a 31/03/2027',
    termExtractLink:
      'https://drive.google.com/drive/folders/1fqG3aOL5dKHxHA3Z0qOIWYap7jc2M72-?usp=drive_link',
    addendums: [],
    documents: [
      {
        name: 'Plano de Trabalho',
        link: 'https://drive.google.com/drive/folders/189jvQAyq-wOE9ygWYb8Xzw8RdJQdQxy3?usp=drive_link',
      },
      {
        name: 'Relatório de Execução Físico-Financeira',
        link: 'https://drive.google.com/drive/folders/1J7ymMGbQGtBFF2dxs9-RHfYsp3vmduE8?usp=drive_link',
      },
      {
        name: 'Demonstrativo Execução Receita/Despesa',
        link: 'https://drive.google.com/drive/folders/1Xk6UzJUr35p8ZAblAMv3n9qMg__NbB0k?usp=drive_link',
      },
      {
        name: 'Relação de pagamentos',
        link: 'https://drive.google.com/drive/folders/1zI_cXpEPvCmYPHUX0sK_LK7__IPR_Cmx?usp=drive_link',
      },
      {
        name: 'Extrato bancário completo',
        link: 'https://drive.google.com/drive/folders/12eQmaI7ZyZzEo7n58aLi1uiZjCcjhoBN?usp=drive_link',
      },
      {
        name: 'Relação de bens adquiridos',
        link: 'https://drive.google.com/drive/folders/1OHQGzKOlu9PHBxu8ufhZd582zO83UYJN?usp=drive_link',
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
                  {term?.termDescription && <p>{term.termDescription}</p>}
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
            <p className={styles.linkText}>Balanços Contábeis</p>
            <a
              className={styles.link}
              href='https://drive.google.com/drive/folders/1kTs0wMODlPdZIwHkAwtLAJBWuZcMnfQe?usp=drive_link'
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
              href='https://drive.google.com/drive/folders/18SiyqddYkTf5wFP5DMny1Xc6tax6Aep_?usp=drive_link'
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
              href='https://drive.google.com/drive/folders/13dqlUFU1TgKLxHD60xekRaWYIFS31uUy?usp=drive_link'
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
              href='https://drive.google.com/drive/folders/1jWn85htsG0iMv1SmYBPYgsqhP9pA7S9V?usp=drive_link'
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
              href='https://drive.google.com/drive/folders/1o92DEBIfX1xkZiNh7qnxmqzg92PFnZ5s?usp=drive_link'
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
              href='https://drive.google.com/drive/folders/1M5ZyO8YX4F1DYFsPIvEw-c86mqQQx2hZ?usp=drive_link'
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
              href='https://drive.google.com/drive/u/2/folders/1rmMsjTU12fIxCM4_Xdpb6ez5bfku6f7g'
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
