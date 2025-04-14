export default class Sample {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    print: (...data: any[]) => void;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(printFunc: (...data: any[]) => void) {
        this.print = printFunc || console.log;
    }

    say() {
        this.print(hello());
    }
}

function hello() {
    return "Hello TDDBC!";
}

export function sum(a: number, b: number): number {
    return a + b;
}

export function subtract(a: number, b: number): number {
    return a - b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}

export function divide(a: number, b: number): number {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}
