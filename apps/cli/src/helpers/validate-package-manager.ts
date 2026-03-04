import type { Failure, Success, Result } from "@gravity/types";

import { createFallbackError, type FallbackError } from "@gravity/error";
import { detect } from "package-manager-detector/detect";

import {
  UnsupportedPackageManagerError,
  PackageManagerDetectionError,
} from "@/errors";

export async function validatePackageManager(): Promise<
  Result<
    "bun",
    | UnsupportedPackageManagerError
    | PackageManagerDetectionError
    | FallbackError
  >
> {
  try {
    const detectResult = await detect();
    if (!detectResult) {
      const failure: Failure<PackageManagerDetectionError> = {
        error: new PackageManagerDetectionError(),
        success: false,
      };

      return failure;
    }

    if (detectResult.name !== "bun") {
      const failure: Failure<UnsupportedPackageManagerError> = {
        error: new UnsupportedPackageManagerError(),
        success: false,
      };

      return failure;
    }

    const success: Success<"bun"> = {
      success: true,
      data: "bun",
    };

    return success;
  } catch (error) {
    const failure: Failure<FallbackError> = {
      error: createFallbackError("Failed to detect package manager.", {
        cause: error,
      }),
      success: false,
    };

    return failure;
  }
}
