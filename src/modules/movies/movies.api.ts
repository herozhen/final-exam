import { APIRequestContext } from '@playwright/test'
import { Movie, MoviesApiResponse } from '@modules/movies/movies.api.type'

export class MoviesApi {

    constructor(private request: APIRequestContext) { }

    async getMovies(maNhom: string = 'GP09'): Promise<Movie[]> {

        const response = await this.request.get(
            `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`
        )

        if (!response.ok()) {
            throw new Error(`API error: ${response.status()}`)
        }

        const data: Movie[] = await response.json()
        console.log('API response:', data);
        return data;

    }

}