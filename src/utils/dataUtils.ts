import { FilterModel } from "../types/dataGridModels";

export const filterData = <T>(
  data: T[],
  searchQuery: string,
  searchableFields: (keyof T)[]
): T[] => {
  if (!searchQuery.trim()) return data;

  const lowerCaseQuery = searchQuery.toLowerCase();

  // Filter data based on search query and searchable fields
  return data.filter((item) =>
    searchableFields.some((field) =>
      item[field]?.toString().toLowerCase().includes(lowerCaseQuery)
    )
  );
};

export const applyFilters = <T>(
  data: T[],
  filterModel: FilterModel<T>
): T[] => {
  const { items } = filterModel;
  if (!items || items.length === 0) return data;

  return data.filter((row) =>
    items.every((filter) => {
      const { field, operator, value } = filter;

      // If the value is empty, return true
      if (!value) return true;

      const cellValue = row[field];

      // Apply filter based on the operator
      switch (operator) {
        case "contains":
          return cellValue
            ?.toString()
            .toLowerCase()
            .includes(value.toLowerCase());
        case "equals":
          return cellValue === value;
        case "startsWith":
          return cellValue
            ?.toString()
            .toLowerCase()
            .startsWith(value.toLowerCase());
        case "endsWith":
          return cellValue
            ?.toString()
            .toLowerCase()
            .endsWith(value.toLowerCase());
        default:
          return true;
      }
    })
  );
};

export const sortData = <T>(
  data: T[],
  sortField: keyof T,
  sortDirection: "asc" | "desc"
): T[] => {
  return [...data].sort((a, b) => {
    // Sort data based on sort field and sort direction
    const aValue = a[sortField] ?? "";
    const bValue = b[sortField] ?? "";

    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });
};
