import React from "react"
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core"

const HostingAndMaintenance = () => {
  return (
    <>
      <Typography variant="h4">Hosting and Maintenance</Typography>
      <Typography>
        I charge the following fees for hosting and maintenance...
      </Typography>
      <TableContainer style={{ marginBottom: "1.5rem" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "50%" }}>Plan</TableCell>
              <TableCell style={{ width: "25%" }}>Monthly Amount (€)</TableCell>
              <TableCell style={{ width: "25%" }}>Yearly Amount (€)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Standard</TableCell>
              <TableCell>20</TableCell>
              <TableCell>200</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Premium</TableCell>
              <TableCell>30</TableCell>
              <TableCell>300</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Custom</TableCell>
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
