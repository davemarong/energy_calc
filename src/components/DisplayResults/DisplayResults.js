// IMPORT

// React

// Material UI
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
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
              <TableRow key={item.label}>
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
