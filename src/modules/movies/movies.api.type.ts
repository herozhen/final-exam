export interface Movie {
    maPhim: number
    tenPhim: string
}

export interface MoviesApiResponse {
    statusCode: number
    content: Movie[]
}