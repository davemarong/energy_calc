// IMPORT

// React
import { useState } from "react";

// Material UI
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

// Components

// Utils

// Data
import { nav_items } from "./NavItems";

// Functional component
export const Nav = () => {
  // State
  const [alignment, setAlignment] = useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  // Functions

  // Return
  return (
    <div>
      <ToggleButtonGroup
        color="secondary"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        {nav_items.map((item) => {
          return (
            <ToggleButton key={item.id} value={item.title}>
              {item.title}
            </ToggleButton>
          );
        })}
      </ToggleButtonGroup>
    </div>
  );
};
