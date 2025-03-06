import { Page } from '@playwright/test';
import { BottomBar } from '../BottomBar';

export abstract class BaseGoogleForm {
  page: Page;
  bottomBar: BottomBar;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForPageToLoad() { };

}