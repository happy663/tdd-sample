export class IntegerRange {
    numbersToString(bottom: number, top: number) {
        return `[${bottom}, ${top}]`;
    }

    isInsideRange(bottom: number, top: number) {
        return bottom <= top && bottom >= top;
    }
}
