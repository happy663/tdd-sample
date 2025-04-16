import { IntegerRange } from "./integer_range";

describe("整数閉区間を示すクラス", () => {
    test("下端点と上端点（整数）を受け取って文字列を返す", () => {
        expect(new IntegerRange().numbersToString(3, 7)).toBe("[3, 7]");
    });
});
