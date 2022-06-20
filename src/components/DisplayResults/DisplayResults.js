// IMPORT

// React

// Material UI
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
// Components

// Utils

// Data

// Functional component
export const DisplayResults = ({ formulaValues, formulaFunctions }) => {
  // State

  // Functions
  const result = formulaFunctions.map((item) => {
    return {
      label: item.label,
      value: item.func(formulaValues),
      metric: item.metric,
    };
  });

  // Return
  return (
    <Container maxWidth="xs">
      <Table>
        <TableBody>
          {result.map((item) => {
            return (
              <TableRow style={{ border: "1px solid grey" }} key={item.label}>
                <TableCell>{item.label}</TableCell>
                <TableCell>
                  {item.value} {item.metric}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Container>
  );
};
