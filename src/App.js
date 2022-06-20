// IMPORT

// React
import { useState } from "react";
import { DisplayResults } from "./components/DisplayResults/DisplayResults";

// Components
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { SliderContainer } from "./components/Slider/SliderContainer";

// Data
import { sliderData } from "./data/Data";
import { link_sirkulær_luftmengde } from "./utils/FormulaFunctions";
import { sirkulær_luftmengde_formula_values } from "./data/FormulaValues";

function App() {
  // State

  const [formulaValues, setFormulaValues] = useState(
    sirkulær_luftmengde_formula_values
  );

  const [formulaFunctions, setFormulaFunctions] = useState(
    link_sirkulær_luftmengde
  );

  // Return
  return (
    <>
      <Nav />
      <Header h="h3">Energy calculator</Header>
      <DisplayResults
        formulaValues={formulaValues}
        formulaFunctions={formulaFunctions}
      />
      <SliderContainer
        sliderData={sliderData}
        formulaValues={formulaValues}
        setFormulaValues={setFormulaValues}
      />
    </>
  );
}

export default App;
