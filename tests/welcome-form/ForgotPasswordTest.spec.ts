import { test } from '@playwright/test';
import { SignInForm } from '../../page-objects/google-forms/SignInForm';
import { WelcomeForm } from '../../page-objects/google-forms/WelcomeForm';
import { AccountRecoveryForm } from '../../page-objects/google-forms/AccountRecoveryForm';

test('shuold validate forgot password scenario', async ({ page }) => {

    const email = "mishpachatkook@gmail.com"
    let signInForm = new SignInForm(page);
    let welcomeForm = new WelcomeForm(page);
    let accountRecoveryForm = new AccountRecoveryForm(page);


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

    await test.step("step 4: Click on Forgot Password button", async () => {
        await welcomeForm.forgotPassword.click();
    })

    await test.step("step 5: Validate the form Account Recovery is loaded", async () => {
        await accountRecoveryForm.waitForPageToLoad();
    })

})




