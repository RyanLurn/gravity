import { detect } from "package-manager-detector/detect";

export async function validatePackageManager() {
  const detectResult = await detect();
  if (!detectResult) {
    console.error("Couldn't detect your package manager.");
    process.exit(1);
  }

  if (detectResult.name !== "bun") {
    console.error("Gravity CLI only supports Bun as the package manager.");
    process.exit(1);
  }

  return detectResult.name;
}
