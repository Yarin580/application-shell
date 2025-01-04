import { Paper, Box } from "@mui/material";
import { DataGridPremium } from "@mui/x-data-grid-premium";
import { GridColDef, GridValidRowModel } from "@mui/x-data-grid-premium";
import { FetchDataFunctionParams, useDataGrid } from "../../hooks/useDataGrid";
import DataGridSearch from "./DataGridSearch";

interface CustomDataGridProps<T extends GridValidRowModel> {
  columns: GridColDef<T>[];
  onRowClick: (row: T) => void;
  fetchData: FetchDataFunctionParams<T>;
}

export const CustomDataGrid = <T extends GridValidRowModel>({
  columns,
  onRowClick,
  fetchData,
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
    setSortField,
    setSortDirection,
  } = useDataGrid(fetchData);

  const handleSortChange = (field: string, direction: string) => {
    setSortField(field);
    setSortDirection(direction);
    setPage(0);
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
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
        <DataGridSearch
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPage={setPage}
        />
      </Box>

      <Paper
        sx={{
          height: "50vh",
          width: "100%",
          overflow: "scroll",
          borderRadius: 3,
          backgroundColor: "#f0f7ff", // Light blue background for a medical theme
        }}
        elevation={1}
      >
        <DataGridPremium
          rows={rows}
          columns={columns}
          onRowClick={(params) => onRowClick(params.row)}
          pagination
          paginationMode="server"
          disableRowGrouping
          disableAggregation
          rowCount={total}
          sortingMode="server"
          onSortModelChange={(model) => {
            if (model.length > 0) {
              const { field, sort } = model[0];
              handleSortChange(field, sort as string);
            }
          }}
          paginationModel={{ page, pageSize }}
          onPaginationModelChange={handlePaginationChange}
          loading={isLoading}
          rowHeight={48}
          getRowHeight={() => "auto"}
          sx={{
            "& .MuiDataGrid-cell": {
              whiteSpace: "normal",
              padding: "16px",
              borderColor: "#d6e4f7", // Light border for cells
              color: "#003366", // Dark blue text for readability
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#e3f2fd", // Light blue column header
              color: "#003366", // Dark blue text
              borderBottom: "1px solid #d6e4f7",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "1px solid #d6e4f7",
              backgroundColor: "#e3f2fd", // Light blue footer background
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#cfe8fc", // Slightly darker blue on hover
            },
            "& .MuiDataGrid-selectedRowCount": {
              color: "#003366",
            },
          }}
        />
      </Paper>
    </>
  );
};
