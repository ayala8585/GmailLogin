import { expect, test } from '@playwright/test';
import { SignInForm } from '../../page-objects/google-forms/SignInForm';
import { WelcomeForm } from '../../page-objects/google-forms/WelcomeForm';

test('shuold validate show password option', async ({ page }) => {

    const email = "mishpachatkook@gmail.com";
    const password = "A12B34C56";
    const masterImagePath = '../../test-inputs/show-password.png';
    let signInForm = new SignInForm(page);
    let welcomeForm = new WelcomeForm(page);


    await test.step("step 1: Navigate to Google account page", async () => {
        await signInForm.navigate();
    })

    await test.step("step 2: Fill valid account", async () => {
        await signInForm.emailInput.fill(email);
    })

    await test.step("step 3: Click next", async () => {
        await signInForm.nextButton.click();
        await welcomeForm.waitForPageToLoad();
    })

    await test.step("step 4: Fill valid password", async () => {
        await welcomeForm.passwordInput.fill(password);
    })

    await test.step("step 5: Fill valid password", async () => {
        await welcomeForm.showPasswordCheckbox.check();
    })

    await test.step("step 6: Take a screenshot and compare to master", async () => {
        await expect(welcomeForm.passwordInput, "Should be same to master image").toHaveScreenshot(masterImagePath);
    })

})




