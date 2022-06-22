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
  return (
    (5.843 * (formulaValues.luftmengde.value * 3600)) ^
    (0.367 / formulaValues.lufthastighet.value) ^
    0.215
  );
};
export const findTrykkfallPlast = (formulaValues) => {
  return (
    3623 *
    (formulaValues.luftmengde.value * 3600) ** 1.707 *
    formulaValues.diameter.value ** -4.642
  );
};
export const findTrykkfallStål = (formulaValues) => {
  return (
    4357 *
    (formulaValues.luftmengde.value * 3600) ** 1.826 *
    formulaValues.diameter.value ** -4.892
  );
};
// export const findDiameterRørPlast = (formulaValues) => {
//   return (
//     4357 *
//     (formulaValues.luftmengde.value * 3600) ** 1.826 *
//     formulaValues.diameter.value ** -4.892
//   );
// };
// export const findDiameterRørStål = (formulaValues) => {
//   return (
//     4357 *
//     (formulaValues.luftmengde.value * 3600) ** 1.826 *
//     formulaValues.diameter.value ** -4.892
//   );
// };

// Variables with functions

// When the user clicks on the link/button of the "label" (sirkulær luftmengde),
// the user will get sliders based
// on the information, and the result of these sliders input are
// based on the formulas in the functions(findSirkulærLuftmengde, findSirkulærLuftmengdeTrykkfall)
export const sirkulær_luftmengde_link = [
  {
    func: findSirkulærLuftmengde,
    label: "Sirkulær luftmengde",
    metric: "l/s",
  },
  {
    func: findSirkulærLuftmengdeTrykkfall,
    label: "Sirkulær trykkfall",
    metric: "Pa/m",
  },
];

export const sirkulær_hastighet_link = [
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

export const sirkulær_diameter_link = [
  { func: findSirkulærDiameter, label: "Sirkulær diameter", metric: "mm" },
  {
    func: findSirkulærDiameterTrykkfall,
    label: "Sirkulær trykkfall",
    metric: "Pa/m",
  },
];

export const trykkfall_link = [
  // These functions/formulas calculate the result that will be shown in the "result area"
  {
    func: findTrykkfallPlast,
    label: "Trykkfall kobber/plastrør",
    metric: "pa/m",
  },
  { func: findTrykkfallStål, label: "Trykkfall stålrør", metric: "pa/m" },
  // {
  //   func: findSirkulærDiameterTrykkfall,
  //   label: "Sirkulær trykkfall",
  //   metric: "Pa/m",
  // },
];
