import { Locator, Page } from '@playwright/test';
import { BaseGoogleForm } from './BaseGoogleForm';

export class AccountRecoveryForm extends BaseGoogleForm {
    page: Page;
    accountRecoveryTitle: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.accountRecoveryTitle = page.locator('span:has-text("Account recovery")');
    }

    async waitForPageToLoad() {
        await this.accountRecoveryTitle.waitFor({ timeout: 10000 });
    };

}