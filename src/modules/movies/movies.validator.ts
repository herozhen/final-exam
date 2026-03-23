import { expect } from '@playwright/test'
import { MoviesService } from '@modules/movies/movies.service'
import { MoviesPage } from '@modules/movies/movies.page';
import { Movie } from '@modules/movies/movies.api.type';

export class MoviesValidator {

    constructor(
        private service: MoviesService,
        private page: MoviesPage

    ) { }

    async validateMovieDropdown(apiMovies: Movie[]) {
        const options = await this.page.getMovieOptions()
        console.log('Dropdown options:', options);

        // đảm bảo dropdown có dữ liệu
        expect(options.length).toBeGreaterThan(0)

        for (const movie of apiMovies) {
            expect(options).toContain(movie.tenPhim);
            console.log(`Validated movie in dropdown: ${movie.tenPhim}`);
        }
    }

}