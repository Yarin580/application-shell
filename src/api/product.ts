import { generateMockProducts } from "../utils/mockData";
import { getAll } from "./baseFunctions";

const MOCK_PRODUCTS = generateMockProducts(1000);

export const getAllProducts = async (
  page: number,
  pageSize: number,
  searchQuery: string,
  sortField: any,
  sortDirection: any
) => {
  const searchableFields: (keyof (typeof MOCK_PRODUCTS)[0])[] = [
    "name",
    "category",
  ];
  return getAll(
    MOCK_PRODUCTS,
    page,
    pageSize,
    searchQuery,
    searchableFields,
    sortField,
    sortDirection
  );
};
