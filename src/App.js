// IMPORT

// React
import { useState } from "react";

// Components
import { Header } from "./components/Header/Header";
import { SliderContainer } from "./components/Slider/SliderContainer";
import { DisplayResults } from "./components/DisplayResults/DisplayResults";

// Data
import { trykkfall_sliderData } from "./formulaData/SliderData";
import { trykkfall_link } from "./formulaData/FormulaFunctions";
import { trykkfall_formula_values } from "./formulaData/FormulaValues";
import { Filters } from "./components/Filters/Filters";

// Styles
import "./App.css";

function App() {
  // STATE
  // User input values
  const [formulaValues, setFormulaValues] = useState(trykkfall_formula_values);

  // The formula functions that calculate the result values
  const [formulaFunctions, setFormulaFunctions] = useState(trykkfall_link);

  // The data for the sliders the user interacts with
  const [sliderData, setSliderData] = useState(trykkfall_sliderData);

  // The toggleButton/nav that is active."Trykkfall/Hastighet/Diameter"
  const [alignment, setAlignment] = useState("Trykkfall");

  // PROPS OBJECT
  const FiltersProps = {
    setFormulaFunctions: setFormulaFunctions,
    setFormulaValues: setFormulaValues,
    setSliderData: setSliderData,
    alignment: alignment,
    setAlignment: setAlignment,
  };

  const SliderContainerProps = {
    sliderData: sliderData,
    setFormulaValues: setFormulaValues,
    alignment: alignment,
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
