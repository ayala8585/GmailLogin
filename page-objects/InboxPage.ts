import { Locator, Page } from '@playwright/test';

export class Inbox {

    gmailLogo: Locator;

    constructor(page: Page) {
        this.gmailLogo = page.locator("h1.XY0ASe");
    }
}