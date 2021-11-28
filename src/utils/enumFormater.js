export const enumFormater = array => {
  const formatedEnum = [];
  array.forEach(item => formatedEnum.push({
    label: item.descricao ? item.descricao : item.nome,
    value: item.id,
  }))
  return formatedEnum;
}