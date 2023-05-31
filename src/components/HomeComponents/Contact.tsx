import styles from '../../stylesheets/components/HomeComponentsStyles/Contact.module.scss';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div id={'contact'} className={styles.container}>
      <h2 className={styles.heading}>Fale Conosco!</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.userDetailsWrapper}>
          <div className={styles.detail}>
            <label className={styles.detailText} htmlFor={'name'}>
              Nome
            </label>
            <input className={styles.detailContent} id={'name'} type={'text'} required />
          </div>
          <div className={styles.detail}>
            <label className={styles.detailText} htmlFor={'email'}>
              Email
            </label>
            <input className={styles.detailContent} id={'email'} type={'email'} required />
          </div>
        </div>
        <div className={styles.messageWrapper}>
          <label className={styles.messageText} htmlFor={'content'}>
            Mensagem
          </label>
          <textarea className={styles.messageContent} id={'content'} required />
        </div>
        <button className={styles.button}>Enviar</button>
        <span className={styles.bar}></span>
        <div className={styles.adressWrapper}>
          <div className={styles.adress}>
            <span className={styles.boldText}>Volta Redonda</span>
            <p className={styles.text}>Rua 21, nº 34 - Vila Sta. Cecília</p>
            <p className={styles.text}>Volta Redonda / RJ - CEP: 27270-280</p>
            <p className={styles.text}>Telefax: (24) 3343-2049 / 3343-7262 / 3342-4885</p>
            <a className={styles.mailto} href={'mailto:casadacrianca2@yahoo.com.br'}>
              casadacrianca2@yahoo.com.br
            </a>
          </div>
          <div className={styles.adress}>
            <span className={styles.boldText}>Nova Friburgo</span>
            <p className={styles.text}>Rua Casemiro de Abreu, nº 07 - Centro</p>
            <p className={styles.text}>Nova Friburgo / RJ - CEP: 28613-050</p>
            <p className={styles.text}>Telefax: (22) 2533-1853</p>
            <a className={styles.mailto} href={'mailto:casadacriancaedoadolescentenf@gmail.com'}>
              casadacriancaedoadolescentenf@gmail.com
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
