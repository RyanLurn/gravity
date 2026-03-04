import { BaseError } from "@/classes/base";

export class UnexpectedError extends BaseError {
  declare code: "UNEXPECTED_ERROR";
  declare retryable: false;
  declare expected: false;
  declare cause: Error;

  constructor(
    message: string,
    {
      context,
      cause,
    }: {
      context?: Record<string, unknown>;
      cause: Error;
    }
  ) {
    super(message, {
      code: "UNEXPECTED_ERROR",
      retryable: false,
      expected: false,
      context,
      cause,
    });
  }
}
