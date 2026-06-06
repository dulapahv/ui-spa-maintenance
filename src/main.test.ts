import { expect, it } from "vitest";
import { buildMaintenancePage } from "./main";

it("renders the maintenance page markup", () => {
  expect(buildMaintenancePage().outerHTML).toMatchSnapshot();
});
