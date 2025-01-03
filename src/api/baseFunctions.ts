export const getAll = async <T>(
  data: T[],
  page: number,
  pageSize: number,
  searchQuery: string,
  searchableFields: (keyof T)[],
  sortField: any,
  sortDirection: any
) => {
  const start = page * pageSize;
  const end = start + pageSize;

  // Simulate server-side delay
  await simulateDelay(500);

  let filteredData = filterData(data, searchQuery, searchableFields);
  if (sortField) {
    filteredData = sortData(filteredData, sortField, sortDirection);
  }

  const rows = filteredData.slice(start, end);
  const total = filteredData.length;

  return { rows, total };
};

// Helper to simulate delay
const simulateDelay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Generic helper to filter data
const filterData = <T>(
  data: T[],
  searchQuery: string,
  searchableFields: (keyof T)[]
): T[] => {
  if (!searchQuery.trim()) return data;

  const lowerCaseQuery = searchQuery.toLowerCase();

  return data.filter((item) =>
    searchableFields.some((field) =>
      item[field]?.toString().toLowerCase().includes(lowerCaseQuery)
    )
  );
};

// Generic helper to sort data
const sortData = <T>(
  data: T[],
  sortField: keyof T,
  sortDirection: "asc" | "desc"
): T[] => {
  return [...data].sort((a, b) => {
    const aValue = a[sortField] ?? "";
    const bValue = b[sortField] ?? "";

    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });
};
