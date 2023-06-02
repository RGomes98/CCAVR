type Validate = {
  success: boolean;
  challenge_ts: string;
  hostname: string;
};

export const validadeReCAPTCHA = async (token: string): Promise<boolean> => {
  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      { method: 'POST' }
    );
    const { success }: Validate = await response.json();

    return success;
  } catch (err) {
    throw new Response(undefined, {
      status: 400,
      statusText: 'Ocorreu algum problema durante a verificação do ReCAPTCHA.',
    });
  }
};
