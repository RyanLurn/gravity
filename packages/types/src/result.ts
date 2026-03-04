export type Result<TData, TError extends Error = Error> =
  | Failure<TError>
  | Success<TData>;
export type Failure<TError extends Error = Error> = {
  success: false;
  error: TError;
};
export type Success<TData = unknown> = { success: true; data: TData };
