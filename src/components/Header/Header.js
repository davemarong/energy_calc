// IMPORT

// React

// Material UI
import Typography from "@mui/material/Typography";

// Components

// Utils

// Data

// Functional component
export const Header = ({ children, h, align = "center" }) => {
  // State

  // Functions

  // Return
  return (
    <Typography align={align} variant={h}>
      {children}
    </Typography>
  );
};
