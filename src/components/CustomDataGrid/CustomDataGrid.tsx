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
    setFilterModel,
    setSortModel,
  } = useDataGrid(fetchData);

  // Handle sort change
  const handleSortChange = (sortModel: any) => {
    if (sortModel.length > 0) {
      setSortModel(sortModel[0]);
    }
    setPage(0);
  };

  // Handle filter change
  const handleFilterChange = (filterModel: any) => {
    setFilterModel(filterModel);
    setPage(0);
  };

  // Handle pagination change
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
          disableAggregation
          disableRowGrouping
          rows={rows}
          columns={columns}
          onRowClick={(params) => onRowClick(params.row)}
          pagination
          paginationMode="server"
          sortingMode="server"
          filterMode="server" // Enable server-side filtering
          rowCount={total}
          onSortModelChange={handleSortChange}
          onFilterModelChange={handleFilterChange}
          paginationModel={{ page, pageSize }}
          onPaginationModelChange={handlePaginationChange}
          loading={isLoading}
          rowHeight={48}
          getRowHeight={() => "auto"}
          sx={{
            "& .MuiDataGrid-cell": {
              whiteSpace: "normal",
              padding: "16px",
              borderColor: "#d6e4f7",
              color: "#003366",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#e3f2fd",
              color: "#003366",
              borderBottom: "1px solid #d6e4f7",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "1px solid #d6e4f7",
              backgroundColor: "#e3f2fd",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#cfe8fc",
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
