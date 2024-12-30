import { generateMockEmployees } from "../utils/mockData";

const MOCK_EMPLOYEES = generateMockEmployees(10000);

export const getAllEmployees = async (
  page: number,
  pageSize: number,
  searchQuery: string
) => {
  const start = page * pageSize;
  const end = start + pageSize;

  // Simulate server-side delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const filteredRows = MOCK_EMPLOYEES.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const rows = filteredRows.slice(start, end);
  const total = filteredRows.length;

  return { rows, total };
};
