export type Result<TData, TError> = Failure<TError> | Success<TData>;
export type Failure<TError> = { success: false; error: TError };
export type Success<TData> = { success: true; data: TData };
