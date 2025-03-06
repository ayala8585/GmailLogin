import { Locator, Page } from '@playwright/test';
import { BaseGoogleForm } from './BaseGoogleForm.ts';

export class WelcomeForm extends BaseGoogleForm {

  welcomeTitle: Locator;
  accountSwitcher: Locator;
  passwordInput: Locator;
  showPasswordCheckbox: Locator;
  forgotPassword: Locator;
  nextButton: Locator;
  errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.welcomeTitle = page.locator('span:has-text("Welcome")');
    this.accountSwitcher = page.locator('div[jscontroller="k5xHfe"]');
    this.passwordInput = page.locator('[name="Passwd"]');
    this.showPasswordCheckbox = page.locator('input[type="checkbox"][jsname="YPqjbf"]');
    this.forgotPassword = page.locator('span:has-text("Forgot password?")');
    this.nextButton = page.getByRole('button', { name: 'Next' })
    this.errorMessage = page.locator('div[jsname="YRMmle"].AxOyFc').nth(0);
  }

  async waitForPageToLoad() {
    await this.welcomeTitle.waitFor({ timeout: 10000 });
  };

}