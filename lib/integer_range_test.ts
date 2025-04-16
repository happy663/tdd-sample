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

    test("整数閉区間の下端の数値を入力したらtrueを返す", () => {
        expect(integerRange.isInsideRange(3, 7, 3)).toBe(true);
    });

    test("整数閉区間の上端の数値を入力したらtrueを返す", () => {
        expect(integerRange.isInsideRange(3, 7, 7)).toBe(true);
    });

    test("整数閉区間より小さい数値を入力したらfalseを返す", () => {
        expect(integerRange.isInsideRange(3, 7, 1)).toBe(false);
    });

    test("下端に小数を受け取ったら false を返す", () => {
        expect(integerRange.isInsideRange(3.1, 7, 4)).toThrow(
            "validationError:小数を入力できません"
        );
    });

    test("上端に小数を受け取ったら false を返す", () => {
        expect(integerRange.isInsideRange(3, 7.5, 4)).toBe(false);
    });

    test("ターゲットに小数を受け取ったら false を返す", () => {
        expect(integerRange.isInsideRange(3, 7, 4.5)).toBe(false);
    });
});
