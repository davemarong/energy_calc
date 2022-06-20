// IMPORT

// React

// Material UI
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// Components

// Utils

// Data

// Functional component
export const Filters = () => {
  // State

  // Functions

  // Return
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Typer</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Kubikk" control={<Radio />} label="Kubikk" />
        <FormControlLabel value="Trykk" control={<Radio />} label="Trykk" />
        <FormControlLabel
          value="Ventilasjon"
          control={<Radio />}
          label="Ventilasjon"
        />
      </RadioGroup>
    </FormControl>
  );
};
