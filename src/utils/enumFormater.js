export const enumFormater = array => {
  const formatedEnum = [];
  console.log('Array do banco');
  console.log(array);

  array.forEach(item => formatedEnum.push({
    label: item.descricao, value: item.id,
  }))


  console.log('\n\n\n\n\n\nArray formatado');
  console.log(formatedEnum);
  return formatedEnum;
}