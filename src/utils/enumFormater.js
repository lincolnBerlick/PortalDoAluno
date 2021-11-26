export const enumFormater = array => {
  const formatedEnum = [];

  array.forEach(item => formatedEnum.push({
    label: item.descricao, value: item.id,
  }))

  return formatedEnum;
}