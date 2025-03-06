import { test } from '@playwright/test';
import { SignInForm } from '../../page-objects/google-forms/SignInForm';
import { WelcomeForm } from '../../page-objects/google-forms/WelcomeForm';

test('shuold validate Account Switcher ', async ({ page, context }) => {

    const email = "mishpachatkook@gmail.com"
    let signInForm = new SignInForm(page);
    let welcomeForm = new WelcomeForm(page)


    await test.step("step 1: Navigate to Google account page", async () => {
        await signInForm.navigate();
    })

    await test.step("step 2: Fill valid account", async () => {
        await signInForm.emailInput.fill(email);
    })

    await test.step("step 3: Click next", async () => {
        await signInForm.nextButton.click();
    })

    await test.step("step 4: Click on Acount Switcher button", async () => {
        await welcomeForm.accountSwitcher.click();
    })

    await test.step("step 5: Validate the form switched back to Sign In form", async () => {
        await signInForm.waitForPageToLoad();
    })

})




