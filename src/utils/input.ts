export const validatePhone = (phone: string): boolean => {
  const validDDD = Array.from({ length: 100 })
    .map((_, index) => index)
    .filter((number) => !(number < 11 || !Boolean(number % 10)))
    .map((n) => String(n));

  const cleanedPhone = phone.replace(/\D/g, '');
  if (cleanedPhone.length !== 11) return false;
  if (cleanedPhone.charAt(2) !== '9') return false;

  const DDD = cleanedPhone.substring(0, 2);
  if (!validDDD.includes(DDD)) return false;
  if (/^(\d)\1+$/.test(cleanedPhone)) return false;

  return true;
};
