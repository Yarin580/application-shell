import { useState } from "react";
import { Box } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid-premium";
import { CustomDataGrid } from "../components/core/CustomDataGrid";
import { DetailPanel } from "../components/layout/DetailesPanel";
import { getAllEmployees } from "../api/employee";
import { Employee } from "../types/models";

const columns: GridColDef[] = [
  { field: "fullName", headerName: "Name", width: 200 },
  { field: "age", headerName: "Age", width: 200 },
  { field: "nickname", headerName: "Nickname", width: 200 },
  { field: "email", headerName: "Email", width: 200 },
  { field: "phone", headerName: "Phone", width: 200 },
  { field: "address", headerName: "Address", width: 300 },

  // Add more columns as needed
];

export const EmployeesPage = () => {
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );

  return (
    <Box sx={{ p: 3 }}>
      <CustomDataGrid
        fetchData={getAllEmployees}
        columns={columns}
        onRowClick={setSelectedEmployee}
      />
      <DetailPanel selectedItem={selectedEmployee} />
    </Box>
  );
};
