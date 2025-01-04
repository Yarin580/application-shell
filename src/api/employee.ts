import { FilterModel, SortModel } from "../types/dataGridModels";
import { Employee } from "../types/models";
import { generateMockEmployees } from "../utils/mockData/mockEmployees";
import { getAll } from "./baseFunctions";

const MOCK_EMPLOYEES = generateMockEmployees(10000);

export const getAllEmployees = async (
  page: number,
  pageSize: number,
  searchQuery: string,
  sortModel: SortModel<Employee>,
  filterModel: FilterModel<Employee>
) => {
  const searchableFields: (keyof Employee)[] = ["fullName", "nickname"];

  return getAll(
    MOCK_EMPLOYEES,
    page,
    pageSize,
    searchQuery,
    searchableFields,
    sortModel,
    filterModel
  );
};
