import { CustomError } from "@gravity/error";

export class UnsupportedPackageManagerError extends CustomError {
  declare code: "UNSUPPORTED_PACKAGE_MANAGER_ERROR";

  constructor() {
    super("Gravity CLI only supports Bun as the package manager.", {
      code: "UNSUPPORTED_PACKAGE_MANAGER_ERROR",
      retryable: false,
      expected: true,
    });
  }
}

export class PackageManagerDetectionError extends CustomError {
  declare code: "PACKAGE_MANAGER_DETECTION_ERROR";

  constructor() {
    super("Couldn't detect your package manager.", {
      code: "PACKAGE_MANAGER_DETECTION_ERROR",
      retryable: false,
      expected: true,
    });
  }
}
