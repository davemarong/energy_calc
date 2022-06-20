const sirkulær_diameter = {
  label: "Diameter",
  stateName: "diameter",
  metric: "mm",
  min: 50,
  max: 1600,
  step: 50,
  defaultValue: 100,
};
const sirkulær_luftmengde = {
  label: "Luftmengde",
  stateName: "luftmengde",
  metric: "m3/h",
  min: 5,
  max: 100000,
  step: 5,
  defaultValue: 105,
};
const sirkulær_lufthastighet = {
  label: "Lufthastighet",
  stateName: "lufthastighet",
  metric: "m/s",
  min: 0.1,
  max: 10,
  step: 0.1,
  defaultValue: 2.5,
};

export const sirkulær_luftmengde_sliderData = [
  sirkulær_lufthastighet,
  sirkulær_diameter,
];
export const sirkulær_hastighet_sliderData = [
  sirkulær_luftmengde,
  sirkulær_diameter,
];
export const sirkulær_diameter_sliderData = [
  sirkulær_lufthastighet,
  sirkulær_luftmengde,
];
