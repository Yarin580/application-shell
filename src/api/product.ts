import { FilterModel, SortModel } from "../types/dataGridModels";
import { Product } from "../types/models";
import { generateMockProducts } from "../utils/mockData/mockProducts";
import { getAll } from "./baseFunctions";

const MOCK_PRODUCTS = generateMockProducts(1000);

export const getAllProducts = async (
  page: number,
  pageSize: number,
  searchQuery: string,
  sortModel: SortModel<Product>,
  filterModel: FilterModel<Product>
) => {
  const searchableFields: (keyof Product)[] = ["name", "category"];
  return getAll(
    MOCK_PRODUCTS,
    page,
    pageSize,
    searchQuery,
    searchableFields,
    sortModel,
    filterModel
  );
};
