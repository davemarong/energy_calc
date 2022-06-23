// IMPORT

// React
import { useState, useEffect } from "react";

// Material UI
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

// Components

// Utils

// Data

// Functional component
export const SliderMui = ({ sliderData, setFormulaValues, alignment }) => {
  // Props
  const { marks, step, min, max, label, metric, defaultValue, stateName } =
    sliderData;

  // State
  const [value, setValue] = useState(defaultValue);

  // Functions
  const handleValue = (e, eValue) => {
    setValue(eValue);
  };

  const handleUpdateFormulaValue = (e, eValue) => {
    setFormulaValues((prev) => {
      return { ...prev, [stateName]: { ...prev[stateName], value: eValue } };
    });
  };

  // UseEffect
  useEffect(() => {
    handleUpdateFormulaValue("e", value);
  }, [alignment]);

  // Return
  return (
    <Container maxWidth="sm">
      <Grid container direction="row">
        <Grid container item justifyContent="space-between" direction="row">
          <Typography>{label}</Typography>
          <Typography>
            {value} {metric}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Slider
            defaultValue={defaultValue}
            color="secondary"
            aria-label="Default"
            marks={marks}
            min={min}
            max={max}
            step={step}
            name="dude"
            valueLabelDisplay="auto"
            onChange={handleValue}
            onChangeCommitted={handleUpdateFormulaValue}
          />
        </Grid>
      </Grid>
    </Container>
  );
};
