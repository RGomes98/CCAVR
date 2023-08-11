import { validatePhone } from '@/utils/validatePhone';
import { RefObject, useState } from 'react';

import ReCAPTCHA from 'react-google-recaptcha';

type ChangeInput = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
type FormError = { name: boolean; phone: boolean; content: boolean };

type FormData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  subject: string;
  content: string;
};

export const useForm = (reCAPTCHARef: RefObject<ReCAPTCHA>) => {
  const [formErrors, setFormErrors] = useState<FormError>({
    name: false,
    phone: false,
    content: false,
  });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    city: '',
    subject: '',
    content: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const PHONE_LENGTH = 11;

  const handleChange = (e: React.ChangeEvent<ChangeInput>) => {
    const { id, value } = e.target;

    const isPhoneOnly = id === 'phone' && value.length <= PHONE_LENGTH;
    const isNotPhone = id !== 'phone';

    if (isPhoneOnly) setFormData((prev) => ({ ...prev, [id]: value }));
    if (isNotPhone) setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading || statusMessage) return;

    const { name, email, phone, city, subject, content } = formData;
    setFormErrors({ name: false, phone: false, content: false });
    let hasFormErrors = false;
    setIsSuccess(false);

    if (!name.trim()) {
      hasFormErrors = true;
      setFormErrors((prev) => ({ ...prev, name: true }));
    }

    if (!content.trim()) {
      hasFormErrors = true;
      setFormErrors((prev) => ({ ...prev, content: true }));
    }

    if (!validatePhone(phone)) {
      hasFormErrors = true;
      setFormErrors((prev) => ({ ...prev, phone: true }));
    }

    if (hasFormErrors) return;
    const reCAPTCHAToken = await reCAPTCHARef.current?.executeAsync();
    reCAPTCHARef.current?.reset();
    setIsLoading(true);

    const { status } = await fetch(process.env.NEXT_PUBLIC_API_URL as string, {
      method: 'POST',
      body: JSON.stringify({
        reCAPTCHAToken,
        name: name,
        email: email,
        phone: phone,
        city: city,
        subject: subject,
        content: content,
      }),
    });

    const statusText: { [index: number]: () => void } = {
      200: () => {
        setIsSuccess(true);
        setStatusMessage('E-mail enviado com sucesso!');
      },
      400: () => setStatusMessage('Todos os campos são necessários!'),
      403: () => setStatusMessage('Tente novamente mais tarde.'),
      500: () => setStatusMessage('Ocorreu algum problema durante o envio do e-mail.'),
    };
    setIsLoading(false);
    statusText[status]();

    setFormData((prev) => {
      return Object.keys(prev).reduce<Record<string, string>>((obj, key) => {
        obj[key] = '';
        return obj;
      }, {}) as FormData;
    });

    setTimeout(() => setStatusMessage(''), 5000);
  };

  return { formData, formErrors, statusMessage, isLoading, isSuccess, handleChange, handleSubmit };
};
