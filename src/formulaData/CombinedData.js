import {
  sirkulær_luftmengde_formula_values,
  sirkulær_hastighet_formula_values,
  sirkulær_diameter_formula_values,
} from "./FormulaValues";
import {
  sirkulær_luftmengde_link,
  sirkulær_hastighet_link,
  sirkulær_diameter_link,
} from "./FormulaFunctions";
import {
  sirkulær_luftmengde_sliderData,
  sirkulær_hastighet_sliderData,
  sirkulær_diameter_sliderData,
} from "./SliderData";

export const allFormulaData = {
  Luftmengde: {
    formulaValue: sirkulær_luftmengde_formula_values,
    formulaFunctions: sirkulær_luftmengde_link,
    sliderData: sirkulær_luftmengde_sliderData,
  },
  Hastighet: {
    formulaValue: sirkulær_hastighet_formula_values,
    formulaFunctions: sirkulær_hastighet_link,
    sliderData: sirkulær_hastighet_sliderData,
  },
  Diameter: {
    formulaValue: sirkulær_diameter_formula_values,
    formulaFunctions: sirkulær_diameter_link,
    sliderData: sirkulær_diameter_sliderData,
  },
};
