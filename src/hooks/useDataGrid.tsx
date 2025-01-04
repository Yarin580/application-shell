import { useState } from "react";
import { useQuery } from "react-query";
import { FilterModel, SortModel } from "../types/dataGridModels";

export type PaginateResponse<T> = {
  rows: T[];
  total: number;
};

export type FetchDataFunctionParams<T> = (
  page: number,
  pageSize: number,
  searchQuery: string,
  sortModel?: any,
  filterModel?: any
) => Promise<PaginateResponse<T>>;

export const useDataGrid = <T,>(fetchData: FetchDataFunctionParams<T>) => {
  const [page, setPage] = useState(0); // Store the current page
  const [pageSize, setPageSize] = useState(50); // Store the page size
  const [searchQuery, setSearchQuery] = useState(""); // Store the search query
  const [sortModel, setSortModel] = useState<SortModel<T> | {}>({}); // Store the sort model
  const [filterModel, setFilterModel] = useState<FilterModel<T>>({ items: [] }); // Store the filter model

  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["dataGrid", page, pageSize, searchQuery, sortModel, filterModel],
    queryFn: () =>
      fetchData(page, pageSize, searchQuery, sortModel, filterModel),
    keepPreviousData: true,
  });

  return {
    rows: data?.rows || [],
    total: data?.total || 0,
    isLoading: isFetching || isLoading,
    isError,
    page,
    pageSize,
    searchQuery,
    sortModel,
    filterModel,
    setPage,
    setPageSize,
    setSearchQuery,
    setFilterModel,
    setSortModel,
  };
};
