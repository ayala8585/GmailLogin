import { expect, Locator, Page } from '@playwright/test';
import { BaseGoogleForm } from './BaseGoogleForm';

export class SignInForm extends BaseGoogleForm {

  emailInput: Locator;
  forgotEmailButton: Locator;
  learnMoreLink: Locator;
  createAccountButton: Locator;
  nextButton: Locator;
  errorMessage: Locator;
  createAccountMenu: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator("#identifierId");
    this.forgotEmailButton = page.getByRole('button', { name: 'Forgot email?' });
    this.learnMoreLink = page.locator('a[jsname="JFyozc"]');
    this.nextButton = page.getByRole('button', { name: 'Next' });
    this.createAccountButton = page.getByRole('button', { name: 'Create account' });
    this.createAccountMenu = page.locator("div[jsname='U0exHf'] > div.VfPpkd-xl07Ob-XxIAqe");
    this.errorMessage = page.locator("div.Ekjuhf.Jj6Lae");
  }

  async navigate() {
    await this.page.goto('/');
    this.waitForPageToLoad();
  }

  async waitForPageToLoad() {
    await expect(this.page).toHaveTitle(/Sign in/, { timeout: 10000 });
  };
}