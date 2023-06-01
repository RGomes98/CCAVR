import { useRef } from 'react';
import styles from '../../stylesheets/components/HomeComponentsStyles/Contact.module.scss';
import ReCAPTCHA from 'react-google-recaptcha';

export const Contact: React.FC = () => {
  const reCAPTCHARef = useRef<ReCAPTCHA>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const {
      contact_name,
      contact_email,
      contact_telephone,
      contact_city,
      contact_subject,
      contact_content,
    } = e.currentTarget;

    const reCAPTCHAToken = await reCAPTCHARef.current?.executeAsync();
    reCAPTCHARef.current?.reset();

    const response = await fetch('http://localhost:5500/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        reCAPTCHAToken,
        name: contact_name.value,
        email: contact_email.value,
        telephone: contact_telephone.value,
        city: contact_city.value,
        subject: contact_subject.value,
        content: contact_content.value,
      }),
    });
  };

  return (
    <div id={'contact'} className={styles.container}>
      <h2 className={styles.heading}>Fale Conosco!</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.userDetailsWrapper}>
          <div className={styles.detail}>
            <label className={styles.detailText} htmlFor={'contact_name'}>
              Nome:
            </label>
            <input className={styles.detailContent} id={'contact_name'} type={'text'} required />
          </div>
          <div className={styles.detail}>
            <label className={styles.detailText} htmlFor={'contact_email'}>
              Email:
            </label>
            <input className={styles.detailContent} id={'contact_email'} type={'email'} required />
          </div>
          <div className={styles.detail}>
            <label className={styles.detailText} htmlFor={'contact_telephone'}>
              Telefone:
            </label>
            <input
              className={styles.detailContent}
              id={'contact_telephone'}
              type={'text'}
              required
            />
          </div>
          <div className={styles.detail}>
            <label className={styles.detailText} htmlFor={'contact_city'}>
              Cidade:
            </label>
            <input className={styles.detailContent} id={'contact_city'} type={'text'} required />
          </div>
        </div>
        <div className={styles.messageWrapper}>
          <label className={styles.detailText} htmlFor={'contact_subject'}>
            Assunto:
          </label>
          <select className={styles.detailContent} id={'contact_subject'} required>
            <option>Contato</option>
            <option>Voluntário</option>
          </select>
          <label className={styles.messageText} htmlFor={'contact_content'}>
            Mensagem:
          </label>
          <textarea className={styles.messageContent} id={'contact_content'} required />
        </div>
        <div className={styles.recaptchaWrapper}>
          <ReCAPTCHA
            badge={'inline'}
            ref={reCAPTCHARef}
            size={'invisible'}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
          />
          <button className={styles.button}>Enviar</button>
        </div>

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
