import React from "react"
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@material-ui/core"

const HostingAndMaintenance = () => {
  return (
    <>
      <Typography variant="h4">Hosting and Maintenance</Typography>
      <Typography paragraph>
        I charge the following fees for hosting and maintenance...
      </Typography>
      <TableContainer
        component={Paper}
        style={{ marginBottom: "1.5rem", color: "white" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "50%" }} />
              <TableCell style={{ width: "25%" }}>Pay Monthly (€)</TableCell>
              <TableCell style={{ width: "25%" }}>Pay Yearly (€)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Priority maintenance</TableCell>
              <TableCell>10</TableCell>
              <TableCell>100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Hosting (core site only)</TableCell>
              <TableCell>10</TableCell>
              <TableCell>100</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Additional product subscriptions</TableCell>
              <TableCell>TBA</TableCell>
              <TableCell>TBA</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default HostingAndMaintenance
