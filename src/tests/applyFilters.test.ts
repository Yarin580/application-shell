import { FilterModel } from "../types/dataGridModels";
import { applyFilters } from "../utils/dataUtils";

type Employee = {
  fullName: string;
  nickname: string;
  age: number;
};

describe("applyFilters", () => {
  const mockData: Employee[] = [
    { fullName: "Yarin Hershko", nickname: "Yarin", age: 23 },
    { fullName: "Yogev Hersh", nickname: "Yogi", age: 25 },
    { fullName: "Yossi Yoss", nickname: "Yossi", age: 35 },
    { fullName: "Tomer Tom", nickname: "Tom", age: 28 },
  ];

  it('should apply "contains" filter correctly', () => {
    const filterModel: FilterModel<Employee> = {
      items: [{ field: "fullName", operator: "contains", value: "Yo" }],
    };

    const filteredData = applyFilters(mockData, filterModel);

    expect(filteredData.length).toBe(2); // John Doe and Jack Daniels
    expect(filteredData).toEqual([
      { fullName: "Yogev Hersh", nickname: "Yogi", age: 25 },
      { fullName: "Yossi Yoss", nickname: "Yossi", age: 35 },
    ]);
  });

  it('should apply "equals" filter correctly', () => {
    const filterModel: FilterModel<Employee> = {
      items: [{ field: "nickname", operator: "equals", value: "Tom" }],
    };

    const filteredData = applyFilters(mockData, filterModel);

    expect(filteredData.length).toBe(1); // Only John Doe
    expect(filteredData).toEqual([
      { fullName: "Tomer Tom", nickname: "Tom", age: 28 },
    ]);
  });

  it('should apply "startsWith" filter correctly', () => {
    const filterModel: FilterModel<Employee> = {
      items: [{ field: "fullName", operator: "startsWith", value: "Ya" }],
    };

    const filteredData = applyFilters(mockData, filterModel);

    expect(filteredData.length).toBe(1); // Jane Smith, Jack Daniels
    expect(filteredData).toEqual([
      { fullName: "Yarin Hershko", nickname: "Yarin", age: 23 },
    ]);
  });

  it('should apply "endsWith" filter correctly', () => {
    const filterModel: FilterModel<Employee> = {
      items: [{ field: "nickname", operator: "endsWith", value: "i" }],
    };

    const filteredData = applyFilters(mockData, filterModel);

    expect(filteredData.length).toBe(2); // Jacks and Jess
    expect(filteredData).toEqual([
      { fullName: "Yogev Hersh", nickname: "Yogi", age: 25 },
      { fullName: "Yossi Yoss", nickname: "Yossi", age: 35 },
    ]);
  });

  it("should return all data when no filters are applied", () => {
    const filterModel: FilterModel<Employee> = {
      items: [],
    };

    const filteredData = applyFilters(mockData, filterModel);

    expect(filteredData.length).toBe(mockData.length); // Should return all data
    expect(filteredData).toEqual(mockData);
  });

  it("should return empty data if value is empty", () => {
    const filterModel: FilterModel<Employee> = {
      items: [{ field: "fullName", operator: "contains", value: "" }],
    };

    const filteredData = applyFilters(mockData, filterModel);

    expect(filteredData.length).toBe(mockData.length); // Should return all data
    expect(filteredData).toEqual(mockData);
  });

  it("should handle unknown operator gracefully", () => {
    const filterModel: FilterModel<Employee> = {
      items: [{ field: "fullName", operator: "unknown", value: "John" }],
    };

    const filteredData = applyFilters(mockData, filterModel);

    expect(filteredData.length).toBe(mockData.length); // Should return all data as "unknown" operator is handled as default
    expect(filteredData).toEqual(mockData);
  });
});
