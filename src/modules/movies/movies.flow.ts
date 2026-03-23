import { MoviesService } from '@modules/movies/movies.service'
import { MoviesPage } from '@modules/movies/movies.page';
import { MovieBookingInfo } from '@modules/movies/movies.data.type';
import { BookingData } from '@modules/booking/booking.type';

export class MoviesFlow {

    constructor(
        private service: MoviesService,
        private page: MoviesPage
    ) { }

    async selectMovieByApi(name: string) {
        const movie = await this.service.findMovieByName(name)
        if (!movie)
            throw new Error('Movie not found');
        await this.page.selectMovie(movie.tenPhim);
        console.log(`Selected movie: ${movie.tenPhim}`);
    }
    async selectMovie(data: BookingData) {
        await this.page.selectMovie(data.movie.movie);
        await this.page.selectCinema(data.movie.cinema);
        await this.page.selectDate(data.movie.date);
        await this.page.clickBuyNow();
    }
}