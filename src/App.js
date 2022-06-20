// IMPORT

// React
import { useState } from "react";

// Components
import { Header } from "./components/Header/Header";
import { SliderContainer } from "./components/Slider/SliderContainer";
import { DisplayResults } from "./components/DisplayResults/DisplayResults";

// Data
import { sirkulær_luftmengde_sliderData } from "./formulaData/SliderData";
import { sirkulær_luftmengde_link } from "./formulaData/FormulaFunctions";
import { sirkulær_luftmengde_formula_values } from "./formulaData/FormulaValues";
import { Filters } from "./components/Filters/Filters";

function App() {
  // STATE
  // User input values
  const [formulaValues, setFormulaValues] = useState(
    sirkulær_luftmengde_formula_values
  );

  // The formula functions that calculate the result values
  const [formulaFunctions, setFormulaFunctions] = useState(
    sirkulær_luftmengde_link
  );

  // The data for the sliders the user interacts with
  const [sliderData, setSliderData] = useState(sirkulær_luftmengde_sliderData);

  // PROPS OBJECT
  const FiltersProps = {
    setFormulaFunctions: setFormulaFunctions,
    setFormulaValues: setFormulaValues,
    setSliderData: setSliderData,
  };

  const SliderContainerProps = {
    sliderData: sliderData,
    formulaValues: formulaValues,
    setFormulaValues: setFormulaValues,
  };

  // RETURN
  return (
    <>
      <Header h="h3">Energy calculator</Header>
      <DisplayResults
        formulaValues={formulaValues}
        formulaFunctions={formulaFunctions}
      />
      <Filters {...FiltersProps} />
      <SliderContainer {...SliderContainerProps} />
    </>
  );
}

export default App;
