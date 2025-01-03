import { useState } from "react";
import { useQuery } from "react-query";

export type PaginateResponse<T> = {
  rows: T[];
  total: number;
};

export type FetchDataFunctionParams<T> = (
  page: number,
  pageSize: number,
  searchQuery: string,
  sortField?: string,
  sortDirection?: string
) => Promise<PaginateResponse<T>>;

export const useDataGrid = <T,>(fetchData: FetchDataFunctionParams<T>) => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<string | undefined>();
  const [sortDirection, setSortDirection] = useState<string | undefined>("asc");

  // Fetch data using react-query
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: [
      "dataGrid",
      page,
      pageSize,
      searchQuery,
      sortDirection,
      sortField,
    ],
    queryFn: () =>
      fetchData(page, pageSize, searchQuery, sortField, sortDirection),
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
    sortField,
    sortDirection,
    setPage,
    setPageSize,
    setSearchQuery,
    setSortField,
    setSortDirection,
  };
};
