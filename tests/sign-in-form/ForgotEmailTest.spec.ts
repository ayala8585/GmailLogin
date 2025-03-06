import { test } from '@playwright/test';
import { SignInForm } from '../../page-objects/google-forms/SignInForm';
import { ForgotEmailForm } from '../../page-objects/google-forms/ForgotEmailForm';

let signInForm: SignInForm;
let forgotEmailForm: ForgotEmailForm;

test('shuold validate forgot email scenario', async ({ page }) => {
  signInForm = new SignInForm(page);
  forgotEmailForm = new ForgotEmailForm(page);

  await test.step("step 1: Navigate to Google account page", async () => {
    await signInForm.navigate();
  })

  await test.step("step 2: Click on Forgot Email button", async () => {
    await signInForm.forgotEmailButton.click();
  })

  await test.step("step 3: Validate Forgot Email form is loaded", async () => {
    await forgotEmailForm.waitForPageToLoad();
  })

});