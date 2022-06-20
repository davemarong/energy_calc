// Functions
// LUFTMENGDE
export const findSirkulærLuftmengde = (formulaValues) => {
  return formulaValues.lufthastighet.value + 100 + formulaValues.diameter.value;
};
export const findSirkulærLuftmengdeTrykkfall = (formulaValues) => {
  return formulaValues.lufthastighet.value + formulaValues.diameter.value;
};
// LUFTHASTIGHET
export const findSirkulærLufthastighet = (formulaValues) => {
  return formulaValues.diameter.value - 100 + formulaValues.luftmengde.value;
};
export const findSirkulærLufthastighetTrykkfall = (formulaValues) => {
  return formulaValues.diameter.value - formulaValues.luftmengde.value;
};
// DIAMETER
export const findSirkulærDiameter = (formulaValues) => {
  return (
    formulaValues.lufthastighet.value + 100 + formulaValues.luftmengde.value
  );
};

export const findSirkulærDiameterTrykkfall = (formulaValues) => {
  return formulaValues.lufthastighet.value + formulaValues.luftmengde.value;
};

// Variables with functions
export const link_sirkulær_luftmengde = [
  {
    func: findSirkulærLuftmengde,
    label: "Sirkulær luftmengde",
    metric: "m3/h",
  },
  {
    func: findSirkulærLuftmengdeTrykkfall,
    label: "Sirkulær trykkfall",
    metric: "Pa/m",
  },
];

export const link_sirkulær_hastighet = [
  {
    func: findSirkulærLufthastighet,
    label: "Sirkulær lufthastighet",
    metric: "m/s",
  },
  {
    func: findSirkulærLufthastighetTrykkfall,
    label: "Sirkulær trykkfall",
    metric: "Pa/m",
  },
];

export const link_sirkulær_diameter = [
  { func: findSirkulærDiameter, label: "Sirkulær diameter", metric: "mm" },
  {
    func: findSirkulærDiameterTrykkfall,
    label: "Sirkulær trykkfall",
    metric: "Pa/m",
  },
];
