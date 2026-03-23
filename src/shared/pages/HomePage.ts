import { Page } from "@playwright/test";
import { CommonPage } from "@shared/pages/CommonPage";

export class HomePage extends CommonPage {
    constructor(page: Page) {
        super(page);
    }
    
}