import { Locator } from '@playwright/test';
import { BaseGoogleForm } from './BaseGoogleForm.ts';

export class ForgotEmailForm extends BaseGoogleForm {

    forgotEmailTitle: Locator;

    constructor(page) {
        super(page);
        this.forgotEmailTitle = page.locator('span[jsslot]:has-text("Find your email")');
    }

    async waitForPageToLoad() {
        await this.forgotEmailTitle.waitFor({ timeout: 10000 });
    };
}