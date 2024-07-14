import { SafeParseReturnType, ZodIssue } from 'zod';

const extractFormDataFiles = (formData: Record<string, FormDataEntryValue>) => {
  return Object.keys(formData)
    .map((key) => formData[key])
    .filter((key) => key instanceof File);
};

const extractFormDataErrors = <TData, TSafeParse extends SafeParseReturnType<TData, TData>>(
  safeParseValues: TSafeParse[],
  errorCallback: (errors: ZodIssue[]) => void
) => {
  const hasError = safeParseValues.some(({ error }) => {
    if (error) errorCallback(error.errors);
    return error;
  });

  return { hasError };
};

const formatErrors = (errors: ZodIssue[]) => {
  return errors.reduce<Record<string, string>>((errors, { path, message }) => {
    const [errorPath] = path;
    errors[errorPath] = message;
    return errors;
  }, {});
};

export const dataUtils = { extractFormDataFiles, extractFormDataErrors, formatErrors };
