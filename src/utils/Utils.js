export const turnObjectToArray = (formulaValues) => {
  let array = Object.keys(formulaValues);
  return array.map((item) => {
    return { ...formulaValues[item] };
  });
};
export const turnToFlatObject = (formulaValuesArray) => {
  let obj = {};
  for (let i = 0; i < formulaValuesArray.length; i++) {
    const { label, value } = formulaValuesArray[i];
    obj = { ...obj, [label]: value };
  }
  return obj;
};
