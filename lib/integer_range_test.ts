import { IntegerRange } from "./integer_range";

describe("整数閉区間を示すクラス", () => {
    let integerRange: IntegerRange;
    beforeEach(() => {
        integerRange = new IntegerRange();
    });

    test("下端点と上端点（整数）を受け取って文字列を返す", () => {
        expect(integerRange.numbersToString(3, 7)).toBe("[3, 7]");
    });

    test("整数閉区間内の数値を入力したらtrueを返す", () => {
        expect(integerRange.isInsideRange(3, 7, 5)).toBe(true);
    });
});
