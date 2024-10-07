type ErrorResponse = {
  detail?: number | string;
  details?: (ErrorDetailsRow | string)[];
  status?: number;
  error?: AxiosError;
};

type ErrorDetailsRow = {
  loc?: (string | number)[];
  msg?: string;
  type?: string;
};

type ApiResponse<T = unknown> = {
  data?: T;
  error?: ErrorResponse;
};
