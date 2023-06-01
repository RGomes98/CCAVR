export const generateTemplate = (
  name: string,
  city: string,
  telephone: string,
  content: string
) => {
  return `<div>
      <span>Nome: ${name}</span>
      <span>Cidade: ${city}</span>
      <span>Telefone: ${telephone}</span>
      <p>${content}</p>
      </div>`;
};
