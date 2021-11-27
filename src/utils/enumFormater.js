export const enumFormater = array => {
  const formatedEnum = [];
  console.log(array);
  array.forEach(item => formatedEnum.push({
    label: item.descricao ? item.descricao : item.nome,
    value: item.id,
  }))
  return formatedEnum;
}