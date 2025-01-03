import { useState } from "react";
import { Box } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid-premium";
import { CustomDataGrid } from "../components/core/CustomDataGrid";
import { DetailPanel } from "../components/layout/DetailesPanel";
import { getAllProducts } from "../api/product";
import { Product } from "../types/models";

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "category", headerName: "Category", width: 200 },
  { field: "price", headerName: "Price ($)", width: 200 },
  { field: "supplier", headerName: "Supplier", width: 200 },
  { field: "lastOrderDate", headerName: "Last Order Date", width: 200 },
  { field: "nextOrderDate", headerName: "Next Order Date", width: 200 },
  { field: "brand", headerName: "Brand", width: 200 },
  { field: "rating", headerName: "Rating", width: 200 },
  { field: "totalCost", headerName: "Total Cost ($)", width: 200 },
  { field: "totalRevenue", headerName: "Total Revenue ($)", width: 200 },
  { field: "totalProfit", headerName: "Profit ($)", width: 200 },
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
