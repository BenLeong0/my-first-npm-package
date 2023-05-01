import { describe, expect, test } from "vitest";

import { add } from "./utils";

describe.each([
  { a: 1, b: 1, expected: 2 },
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 1, expected: 3 },
  { a: 1, b: 0, expected: 1 },
  { a: 0, b: 0, expected: 0 },
])("describe object add($a, $b)", ({ a, b, expected }) => {
  test(`returns ${expected}`, () => {
    expect(add(a, b)).toBe(expected);
  });

  test(`returned value not be greater than ${expected}`, () => {
    expect(add(a, b)).not.toBeGreaterThan(expected);
  });

  test(`returned value not be less than ${expected}`, () => {
    expect(add(a, b)).not.toBeLessThan(expected);
  });
});
