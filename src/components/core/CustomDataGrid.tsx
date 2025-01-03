import {
  DataGridPremium,
  GridColDef,
  GridValidRowModel,
} from "@mui/x-data-grid-premium";
import { Paper, TextField, InputAdornment, Box } from "@mui/material";
import { ChangeEvent } from "react";
import { FetchDataFunctionParams, useDataGrid } from "../../hooks/useDataGrid";
import SearchIcon from "@mui/icons-material/Search";

interface CustomDataGridProps<T extends GridValidRowModel> {
  columns: GridColDef<T>[]; // Columns are typed to match row type
  onRowClick: (row: T) => void; // Row click handler is typed
  fetchData: FetchDataFunctionParams<T>; // Fetch function for the specific model
}

export const CustomDataGrid = <T extends GridValidRowModel>({
  fetchData,
  columns,
  onRowClick,
}: CustomDataGridProps<T>) => {
  // Data grid state
  const {
    rows,
    total,
    isLoading,
    page,
    pageSize,
    searchQuery,
    setPage,
    setPageSize,
    setSearchQuery,
  } = useDataGrid(fetchData);

  // Handlers

  // Handler for search input change
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setPage(0);
  };

  // Handler for pagination change
  const handlePaginationChange = (paginationModel: {
    page: number;
    pageSize: number;
  }) => {
    setPage(paginationModel.page);
    setPageSize(paginationModel.pageSize);
  };
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{
            width: 240,
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              "& fieldset": {
                borderColor: "divider",
              },
              "&:hover fieldset": {
                borderColor: "primary.main",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Paper
        sx={{
          height: "50vh",
          width: "100%",
          overflow: "scroll",
          borderRadius: 3,
        }}
        elevation={0}
      >
        <DataGridPremium
          rows={rows}
          columns={columns}
          onRowClick={(params) => onRowClick(params.row)}
          pagination
          paginationMode="server"
          rowCount={total}
          paginationModel={{ page, pageSize }}
          onPaginationModelChange={handlePaginationChange}
          loading={isLoading}
          rowHeight={48}
          getRowHeight={() => "auto"}
          sx={{
            "& .MuiDataGrid-cell": {
              whiteSpace: "normal",
              padding: "16px",
              borderColor: "divider",
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: 1,
              borderColor: "divider",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: 1,
              borderColor: "divider",
            },
          }}
        />
      </Paper>
    </>
  );
};
