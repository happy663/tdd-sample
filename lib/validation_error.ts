export class ValidationError extends Error {
    constructor(message: string) {
        super(`validationError:${message}`);
    }
}
