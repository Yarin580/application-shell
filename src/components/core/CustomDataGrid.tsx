import {
  DataGridPremium,
  GridColDef,
  GridValidRowModel,
} from "@mui/x-data-grid-premium";
import { Paper, TextField, InputAdornment } from "@mui/material";
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

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };
  const handlePaginationChange = (paginationModel: {
    page: number;
    pageSize: number;
  }) => {
    setPage(paginationModel.page);
    setPageSize(paginationModel.pageSize);
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <TextField
          variant="outlined"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{
            mb: 1,
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px", // Makes it rounded
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
      </div>

      <Paper
        sx={{
          height: "50vh",
          width: "100%",
        }}
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
              padding: "12px",
            },
          }}
        />
      </Paper>
    </>
  );
};
