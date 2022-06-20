// IMPORT

// React
import { useState } from "react";
// Components
import { Filters } from "./components/Filters/Filters";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { SliderContainer } from "./components/Slider/SliderContainer";

// Data
import { sliderData } from "./data/Data";

function App() {
  // State
  const [formulaValues, setFormulaValues] = useState({
    lufthastighet: 2.5,
    diameter: 100,
  });
  const [lufthastighet, setLufthastighet] = useState(2.7);
  const [diameter, setDiameter] = useState();

  // Data
  // sliderData =

  // Return
  return (
    <>
      <Nav />
      <Header h="h3">Energy calculator</Header>

      <SliderContainer
        sliderData={sliderData}
        formulaValues={formulaValues}
        setFormulaValues={setFormulaValues}
      />
    </>
  );
}

export default App;
