import { test, expect } from "@fixtures/custom-fixtures";
import { loadJson } from '@utils/json.loader';

test.describe('@movies @regression Movies Suite', () => {

    const testData = loadJson('movies/movies.data.json')

    // validate UI vs API
    test('Movie dropdown should match API', async ({ homePage, moviesApi, moviesValidator }) => {
        await homePage.goTo('https://demo1.cybersoft.edu.vn/');
        console.log('Fetching movies from API...')
        const apiMovies = await moviesApi.getMovies()
        console.log('API movies:', apiMovies)
        await moviesValidator.validateMovieDropdown(apiMovies)
    }) 

});


test.describe('@movies @regression Online movie ticket booking suite with login success', () => { });
test.describe('@movies @regression Online movie ticket booking suite without login', () => { });