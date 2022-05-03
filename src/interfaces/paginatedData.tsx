interface PaginatedData<T> {
  data: T;
  first_id: number;
  last_id: number;
  more: boolean;
}
