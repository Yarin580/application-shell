import { generateMockEmployees } from "../utils/mockData";
import { getAll } from "./baseFunctions";

const MOCK_EMPLOYEES = generateMockEmployees(10000);

export const getAllEmployees = async (
  page: number,
  pageSize: number,
  searchQuery: string,
  sortField: any,
  sortDirection: any
) => {
  const searchableFields: (keyof (typeof MOCK_EMPLOYEES)[0])[] = [
    "fullName",
    "nickname",
  ];
  return getAll(
    MOCK_EMPLOYEES,
    page,
    pageSize,
    searchQuery,
    searchableFields,
    sortField,
    sortDirection
  );
};
