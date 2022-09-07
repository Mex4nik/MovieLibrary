const stringValidationFormat = /[!@#$%^&*()_+\=\[\]{};':"\\|.<>\/?]+/;

export const stringValidation = (string) => {
    if (stringValidationFormat.test(string)){	        // false if validation are successful
        throw new Error(`This value have special characters in it -> '${string}'`)
    }
}