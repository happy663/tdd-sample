import { ValidationError } from "./validation_error";

export class IntegerRange {
    numbersToString(bottom: number, top: number) {
        return `[${bottom}, ${top}]`;
    }

    isInsideRange(bottom: number, top: number, target: number): boolean {
        if (
            !Number.isInteger(bottom) ||
            !Number.isInteger(top) ||
            !Number.isInteger(target)
        ) {
            throw new ValidationError("小数を入力できません");
        }

        return bottom <= target && target <= top;
    }
}
