export const parseTxt = (file) => {
    let text = file.split(/\n/);

    const movies = [];
    let movie = {}
    for (let i = 0; i < text.length; i++) {
        const chank = text[i]
        if (chank) {
            let parsedChunk = chank.split(':');

            let key = parsedChunk[0].trim();
            if (key === 'Title') parsedChunk[0] = 'title'
            else if (key === 'Release Year') parsedChunk[0] = 'releaseDate'
            else if (key === 'Format') parsedChunk[0] = 'format'
            else if (key === 'Stars') parsedChunk[0] = 'stars'

            movie[parsedChunk[0].trim()] = parsedChunk[1].trim();
        } else {
            if ('title' in movie) movies.push(movie)
            movie = {}
        }
    }

    return movies
}