const movieValidationFormat = /[!@#$%^&*()_+\=\[\]{};':"\\|.<>\/?]+/;
const starValidationFormat = /[!@#$%^&*()_+\=\[\]{};':"\\|.<>\/?0-9]+/;

export const validationTypes = {
    Movie: 'Movie',
    Star: 'Star'
}

export const stringValidation = (string, type) => {
    let validationFormat = '';
    if (type === validationTypes.Movie) {
        validationFormat = movieValidationFormat
    } else if (type === validationTypes.Star) {
        validationFormat = starValidationFormat
    }

    if (validationFormat.test(string)) {	        // false if validation are successful
        throw new Error(`This value have special characters in it -> '${string}'`)
    }

}