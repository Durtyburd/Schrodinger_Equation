import { getMaxValue } from "./getMaxValue.js";

describe("getMaxValue", () => {
  test("Should return the max value of an array", () => {
    // input values
    const inputArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const inputArr2 = [0, 0, 0, 0, 0, 0, 0.0001, 0, 0, 0, 0, 0];
    const inputArr3 = [];

    // expected outputs
    const expectedArr1Val = 10;
    const expectedArr2Val = 0.0001;
    const expectedArr3Val = undefined;

    expect(getMaxValue(inputArr1)).toBe(expectedArr1Val);
    expect(getMaxValue(inputArr2)).toBe(expectedArr2Val);
    expect(getMaxValue(inputArr3)).toBe(expectedArr3Val);
  });
});
