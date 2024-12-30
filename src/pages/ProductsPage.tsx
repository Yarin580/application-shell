import { useState } from "react";
import { Box } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid-premium";
import { CustomDataGrid } from "../components/core/CustomDataGrid";
import { DetailPanel } from "../components/layout/DetailesPanel";
import { getAllProducts } from "../api/product";
import { Product } from "../types/models";

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 130 },
  { field: "category", headerName: "Category", width: 130 },
  { field: "price", headerName: "Price ($)", width: 150 },
  { field: "supplier", headerName: "Supplier", width: 200 },
  { field: "status", headerName: "Status", width: 150 },
];

export const ProductsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <Box sx={{ p: 3 }}>
      <CustomDataGrid
        fetchData={getAllProducts}
        columns={columns}
        onRowClick={setSelectedProduct}
      />
      <DetailPanel selectedItem={selectedProduct} />
    </Box>
  );
};
