import { MoviesApi } from '@modules/movies/movies.api'
import { Movie } from '@modules/movies/movies.api.type'

export class MoviesService {
  private cache: Movie[] | null = null
  constructor(private api: MoviesApi) { }

  async getMovies(): Promise<Movie[]> {
    if (!this.cache) {
      this.cache = await this.api.getMovies()
    }
    console.log('MoviesService cache:', this.cache);
    return this.cache;
  }

  async findMovieByName(name: string): Promise<Movie | undefined> {

    const movies = await this.getMovies()
    console.log('Finding movie by name:', name);
    return movies.find(m => m.tenPhim === name)

  }

}