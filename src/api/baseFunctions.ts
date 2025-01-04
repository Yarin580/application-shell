import { FilterModel, SortModel } from "../types/dataGridModels";
import { applyFilters, filterData, sortData } from "../utils/dataUtils";

export const getAll = async <T>(
  data: T[],
  page: number,
  pageSize: number,
  searchQuery: string,
  searchableFields: (keyof T)[],
  sortModel: SortModel<T>,
  filterModel: FilterModel<T>
) => {
  const start = page * pageSize;
  const end = start + pageSize;

  // Simulate server-side delay
  await simulateDelay(500);

  let filteredData = filterData(data, searchQuery, searchableFields);

  // Apply filter model
  filteredData = applyFilters(filteredData, filterModel);

  if (sortModel.field) {
    // Sort data
    filteredData = sortData(filteredData, sortModel.field, sortModel.sort);
  }

  const rows = filteredData.slice(start, end);
  const total = filteredData.length;

  return { rows, total };
};

// Simulate server-side delay
const simulateDelay = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));
