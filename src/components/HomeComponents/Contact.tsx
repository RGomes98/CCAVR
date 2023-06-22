'use client';

import { useForm } from '@/hooks/useForm';
import { cities } from '@/data/cities';
import { useRef } from 'react';

import styles from '../../stylesheets/components/HomeComponentsStyles/Contact.module.scss';
import ReCAPTCHA from 'react-google-recaptcha';
import Image from 'next/image';

export const Contact: React.FC = () => {
  const reCAPTCHARef = useRef<ReCAPTCHA>(null);
  const { formData, formErrors, statusMessage, isLoading, isError, handleChange, handleSubmit } =
    useForm(reCAPTCHARef);

  const isResponseError = isError ? '' : styles.successMessage;

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
            <label htmlFor='phone' className={styles.detailText}>
              Tel.Celular
            </label>
            <input
              required
              type='text'
              pattern='\d*'
              id='phone'
              onChange={handleChange}
              value={formData.phone}
              className={styles.detailContent}
              placeholder='Digite o número de telefone com DDD.'
            />

            <span className={`${styles.errorMessage} ${formErrors.phone && styles.showError}`}>
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
          <div className={styles.contentWrapper}>
            <textarea
              required
              id='content'
              onChange={handleChange}
              value={formData.content}
              className={styles.messageContent}
            />
            {isLoading && (
              <div className={styles.spinnerWrapper}>
                <Image
                  width={60}
                  height={60}
                  alt='loading-spinner'
                  className={styles.spinner}
                  src='/logos/svgs/loadingSpinner.svg'
                />
              </div>
            )}
          </div>
          <div className={styles.contactMessageWrapper}>
            <span className={`${styles.errorMessage} ${formErrors.content && styles.showError}`}>
              Insira uma mensagem válida!
            </span>
            <span
              className={`${styles.contactResponse} ${isResponseError} ${
                statusMessage && styles.showResponse
              }`}
            >
              {statusMessage}
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
          <button className={styles.button}>
            <span className={styles.buttonText}>Enviar</span>
          </button>
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
