import type { SafeParseReturnType, ZodIssue } from 'zod';

type ExtractFormDataFiles = Record<string, FormDataEntryValue>;

function extractFormDataFiles(formData: ExtractFormDataFiles) {
  return Object.keys(formData)
    .map((key) => formData[key])
    .filter((key) => key instanceof File);
}

type ExtractFormDataErrors<TSafeParse> = {
  safeParseValues: TSafeParse[];
  errorCallback: (errors: ZodIssue[]) => void;
};

function extractFormDataErrors<TData, TSafeParse extends SafeParseReturnType<TData, TData>>({
  errorCallback,
  safeParseValues,
}: ExtractFormDataErrors<TSafeParse>) {
  return safeParseValues.some(({ error }) => {
    if (error) errorCallback(error.errors);
    return error;
  });
}

type FormatErrors = { errors: ZodIssue[] };

function formatErrors({ errors }: FormatErrors) {
  return errors.reduce<Record<string, string>>((errors, { path, message }) => {
    const [errorPath] = path;
    errors[errorPath] = message;
    return errors;
  }, {});
}

export { extractFormDataFiles, extractFormDataErrors, formatErrors };
