// IMPORT

// React
import { useState } from "react";

// Material UI
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Components

// Utils

// Data
import { filter_items } from "./Filter_items";
import { allFormulaData } from "../../formulaData/CombinedData";

// Functional component
export const Filters = ({
  setFormulaFunctions,
  setFormulaValues,
  setSliderData,
}) => {
  // State
  const [alignment, setAlignment] = useState("Luftmengde");

  // Functions
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleSwitchFilter = (event, value) => {
    const { formulaValue, formulaFunctions, sliderData } =
      allFormulaData[value];
    setFormulaFunctions(formulaFunctions);
    setFormulaValues(formulaValue);
    setSliderData(sliderData);
  };
  // Return
  return (
    <Container maxWidth="sm">
      <Grid container justifyContent="center" style={{ margin: "50px 0" }}>
        <ToggleButtonGroup
          color="secondary"
          value={alignment}
          exclusive
          onChange={handleChange}
        >
          {filter_items.map((item) => {
            return (
              <ToggleButton
                onClick={handleSwitchFilter}
                key={item.id}
                value={item.label}
              >
                {item.label}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </Grid>
    </Container>
  );
};
