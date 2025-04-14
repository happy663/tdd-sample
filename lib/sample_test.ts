import { strict as assert } from "assert";
import Sample, { sum, subtract, multiply, divide } from "./sample";
import rewire from "rewire";

test("exported class", () => {
    let ret = "";
    const print = (str: string) => (ret = str);
    const sample = new Sample(print);
    sample.say();
    assert.equal(ret, "Hello TDDBC!");
});

const SampleImpl = rewire("./sample");
test("private function", () => {
    const hello = SampleImpl.__get__("hello");
    expect(hello()).toBe("Hello TDDBC!");
});

test("加算: sumは2つの数値を足した結果を返す", () => {
    expect(sum(5, 3)).toBe(8);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(0, 0)).toBe(0);
});

test("減算: subtractは1つ目の数値から2つ目の数値を引いた結果を返す", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(3, 5)).toBe(-2);
    expect(subtract(5, 5)).toBe(0);
});

test("乗算: multiplyは2つの数値を掛けた結果を返す", () => {
    expect(multiply(5, 3)).toBe(15);
    expect(multiply(-2, 4)).toBe(-8);
    expect(multiply(0, 5)).toBe(0);
});

test("除算: divideは1つ目の数値を2つ目の数値で割った結果を返す", () => {
    expect(divide(6, 3)).toBe(2);
    expect(divide(5, 2)).toBe(2.5);
    expect(divide(-10, 2)).toBe(-5);
});

test("除算: 0で割るとエラーがスローされる", () => {
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed");
});
