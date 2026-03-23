import { BasePage } from '@core/BasePage';
import { Page } from '@playwright/test';

export class MoviesPage extends BasePage {
    private readonly drpMovies = this.page.locator('//select[@name="film"]');
    private readonly drpCinema = this.page.locator('//select[@name="cinema"]');
    private readonly optDate = this.page.locator('//select[@name="date"]');
    private readonly btnBuyNow = this.page.getByRole('button', { name: 'MUA VÉ NGAY' });

    constructor(page: Page) {
        super(page)
    }
    async selectMovie(name: string) {
        await this.click(this.drpMovies);
        await this.selectOption(this.drpMovies, name);
    }
    async selectCinema(name: string) {
        await this.click(this.drpCinema);
        await this.selectOption(this.drpCinema, name);
    }
    async selectDate(date: string) {
        await this.click(this.optDate);
        await this.selectOption(this.optDate, date);
    }

    async getValueShowTime(): Promise<number | string> {
        const value = await this.optDate.inputValue();
        console.log("Selected show time:", value);
        return value;
    }

    async clickBuyNow() {
        await this.click(this.btnBuyNow);
    }
    async getMovieOptions(): Promise<string[]> {
        const options = this.drpMovies.locator('option')
        await this.page.waitForFunction(() => {
            const select = document.querySelector('select[name="film"]') as HTMLSelectElement
            return select && select.options.length > 1
        })
        const texts = await options.allTextContents()
        console.log("Dropdown movies:", texts)
        return texts;
    }
}
