export type SortModel<T> = {
  field: keyof T;
  sort: "asc" | "desc";
};

export type FilterModel<T> = {
  items: {
    field: keyof T;
    operator: string;
    value: any;
  }[];
};
