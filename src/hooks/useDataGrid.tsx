import { useState } from "react";
import { useQuery } from "react-query";

export type PaginateResponse<T> = {
  rows: T[];
  total: number;
};

export type FetchDataFunctionParams<T> = (
  page: number,
  pageSize: number,
  searchQuery: string
) => Promise<PaginateResponse<T>>;

export const useDataGrid = <T,>(fetchData: FetchDataFunctionParams<T>) => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(50);
  const [searchQuery, setSearchQuery] = useState("");

  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ["dataGrid", page, pageSize, searchQuery],
    queryFn: () => fetchData(page, pageSize, searchQuery),
    keepPreviousData: true,
  });

  return {
    rows: data?.rows || [],
    total: data?.total || 0,
    isLoading: isFetching,
    isError,
    page,
    pageSize,
    searchQuery,
    setPage,
    setPageSize,
    setSearchQuery,
  };
};
