// IMPORT

// React

// Material UI
import Slider from "@mui/material/Slider";

// Components

// Utils

// Data

// Functional component
export const SliderMui = () => {
  // State

  // Functions

  // Data
  const marks = [
    {
      value: 0,
      label: "0°C",
    },
    {
      value: 25,
      label: "25°C",
    },

    {
      value: 50,
      label: "50°C",
    },
    {
      value: 75,
      label: "75°C",
    },
    {
      value: 100,
      label: "100°C",
    },
  ];

  // Return
  return (
    <div style={{ margin: 100 }}>
      <Slider
        defaultValue={50}
        aria-label="Default"
        marks={marks}
        valueLabelDisplay="on"
      />
    </div>
  );
};
