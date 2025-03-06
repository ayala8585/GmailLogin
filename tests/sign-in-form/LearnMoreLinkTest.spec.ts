import { expect, test } from '@playwright/test';
import { SignInForm } from '../../page-objects/google-forms/SignInForm';


test('shuold validate Learn More link ', async ({ page, context }) => {
  let signInForm = new SignInForm(page);

  await test.step("step 1: Navigate to Google account page", async () => {
    await signInForm.navigate();
  })

  await test.step("step 2: Click on Learn More link", async () => {
    await signInForm.learnMoreLink.click();
  })

  await test.step("step 3: Validate Learn More page is loaded", async () => {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      signInForm.learnMoreLink.click()
    ]);
    await expect(newPage, "Support page should open").toHaveURL(/support\.google\.com/);
  })

});