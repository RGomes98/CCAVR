type Validate = {
  success: boolean;
  challenge_ts: string;
  hostname: string;
};

export const validateReCAPTCHA = async (token: string): Promise<boolean> => {
  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      { method: 'POST' }
    );

    const { success }: Validate = await response.json();
    return success;
  } catch (err) {
    throw new Error('Ocorreu algum problema durante a validação do ReCAPTCHA.');
  }
};
