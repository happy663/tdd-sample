export class IntegerRange {
    numbersToString(bottom: number, top: number) {
        return `[${bottom}, ${top}]`;
    }

    isInsideRange(bottom: number, top: number, target: number): boolean {
        return bottom <= target && target <= top;
    }
}
