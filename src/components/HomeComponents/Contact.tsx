import { validateTelephone } from '@/utils/validateTelephone';
import { useRef, useState } from 'react';
import { cities } from '@/data/cities';

import styles from '../../stylesheets/components/HomeComponentsStyles/Contact.module.scss';
import ReCAPTCHA from 'react-google-recaptcha';

type Form = {
  name: string;
  email: string;
  telephone: string;
  city: string;
  subject: string;
  content: string;
};

type FormError = {
  name: boolean;
  telephone: boolean;
  content: boolean;
};

type ContactMessage = {
  code: null | number;
  message: string;
};

type ChangeInput = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export const Contact: React.FC = () => {
  const [contactMessage, setContactMessage] = useState<ContactMessage>({
    code: null,
    message: '',
  });

  const [formErrors, setFormErrors] = useState<FormError>({
    name: false,
    telephone: false,
    content: false,
  });

  const [formData, setFormData] = useState<Form>({
    name: '',
    email: '',
    telephone: '',
    city: '',
    subject: '',
    content: '',
  });

  const contactMessageColor = contactMessage.code === 200 && styles.successMessage;
  const reCAPTCHARef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: React.ChangeEvent<ChangeInput>) => {
    const { value } = e.target;
    const { id } = e.target;
    const telephoneLength = 11;

    if (id !== 'telephone') setFormData((prev) => ({ ...prev, [id]: value }));
    if (id === 'telephone' && value.length <= telephoneLength) {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, telephone, city, subject, content } = formData;
    setFormErrors({ name: false, telephone: false, content: false });
    let hasError = false;

    if (!name.trim()) {
      hasError = true;
      setFormErrors((prev) => ({ ...prev, name: true }));
    }

    if (!content.trim()) {
      hasError = true;
      setFormErrors((prev) => ({ ...prev, content: true }));
    }

    if (!validateTelephone(telephone)) {
      hasError = true;
      setFormErrors((prev) => ({ ...prev, telephone: true }));
    }

    if (hasError) return;

    const reCAPTCHAToken = await reCAPTCHARef.current?.executeAsync();
    reCAPTCHARef.current?.reset();

    const response = await fetch(process.env.NEXT_PUBLIC_API_URL as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        reCAPTCHAToken,
        name: name,
        email: email,
        telephone: telephone,
        city: city,
        subject: subject,
        content: content,
      }),
    });

    setContactMessage({ message: response.statusText, code: response.status });
    setTimeout(() => setContactMessage({ message: '', code: null }), 5000);
  };

  return (
    <div id='contact' className={styles.container}>
      <h2 className={styles.heading}>Fale Conosco!</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.userDetailsWrapper}>
          <div className={styles.detail}>
            <label htmlFor='name' className={styles.detailText}>
              Nome
            </label>
            <input
              required
              id='name'
              type='text'
              value={formData.name}
              onChange={handleChange}
              className={styles.detailContent}
              pattern='[A-Za-z\u00C0-\u00FF ]+'
            />
            <span className={`${styles.errorMessage} ${formErrors.name && styles.showError}`}>
              Insira um nome válido!
            </span>
          </div>
          <div className={styles.detail}>
            <label htmlFor='email' className={styles.detailText}>
              Email
            </label>
            <input
              required
              id='email'
              type='email'
              onChange={handleChange}
              value={formData.email}
              className={styles.detailContent}
            />
          </div>
          <div className={styles.detail}>
            <label htmlFor='telephone' className={styles.detailText}>
              Tel.Celular
            </label>
            <input
              required
              type='text'
              pattern='\d*'
              id='telephone'
              onChange={handleChange}
              value={formData.telephone}
              className={styles.detailContent}
              placeholder='Digite o número de telefone com DDD.'
            />

            <span className={`${styles.errorMessage} ${formErrors.telephone && styles.showError}`}>
              Insira um número válido!
            </span>
          </div>
          <div className={styles.detail}>
            <label htmlFor='city' className={styles.detailText}>
              Cidade
            </label>
            <select id='city' required onChange={handleChange} className={styles.detailContent}>
              <option />
              {cities.map((city) => {
                return (
                  <option value={city} key={city}>
                    {city}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className={styles.messageWrapper}>
          <label htmlFor='subject' className={styles.detailText}>
            Assunto
          </label>
          <select id='subject' required onChange={handleChange} className={styles.detailContent}>
            <option />
            <option value='Contato'>Contato</option>
            <option value='Voluntário'>Voluntário</option>
          </select>
          <label htmlFor='content' className={styles.messageText}>
            Mensagem
          </label>
          <textarea
            required
            id='content'
            onChange={handleChange}
            value={formData.content}
            className={styles.messageContent}
          />
          <div className={styles.contactMessageWrapper}>
            <span className={`${styles.errorMessage} ${formErrors.content && styles.showError}`}>
              Insira uma mensagem válida!
            </span>
            <span
              className={`${styles.contactResponse} ${contactMessageColor} ${
                contactMessage.code && styles.showResponse
              }`}
            >
              {contactMessage.message}
            </span>
          </div>
        </div>
        <div className={styles.recaptchaWrapper}>
          <ReCAPTCHA
            badge='inline'
            size='invisible'
            ref={reCAPTCHARef}
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
            <a href='mailto:casadacrianca2@yahoo.com.br' className={styles.mailto}>
              casadacrianca2@yahoo.com.br
            </a>
          </div>
          <div className={styles.adress}>
            <span className={styles.boldText}>Nova Friburgo</span>
            <p className={styles.text}>Rua Casemiro de Abreu, nº 07 - Centro</p>
            <p className={styles.text}>Nova Friburgo / RJ - CEP: 28613-050</p>
            <p className={styles.text}>Telefax: (22) 2533-1853</p>
            <a href='mailto:casadacriancaedoadolescentenf@gmail.com' className={styles.mailto}>
              casadacriancaedoadolescentenf@gmail.com
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
