import { Locator, Page } from '@playwright/test';

export class BottomBar {

    language: Locator;
    help: Locator;
    privacy: Locator;
    terms: Locator;

    constructor(page: Page) {
        this.language = page.locator('div.VfPpkd-aPP78e');
        this.help = page.locator('a.AVAq4d.TrZEUc[href="https://support.google.com/accounts?hl=en-US&p=account_iph"]');
        this.privacy = page.locator('a.AVAq4d.TrZEUc[href="https://accounts.google.com/TOS?loc=IL&hl=en-US&privacy=true"]');
        this.terms = page.locator('a.AVAq4d.TrZEUc[href="https://accounts.google.com/TOS?loc=IL&hl=en-US"]');
    }
}