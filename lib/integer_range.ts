export class IntegerRange {
    numbersToString(bottom: number, top: number) {
        return `[${bottom}, ${top}]`;
    }

    isInsideRange(bottom: number, top: number, target: number): boolean {
        if (!Number.isInteger(bottom) || !Number.isInteger(top)) {
            return false;
        }
        return bottom <= target && target <= top;
    }
}
