import { test, expect } from '@playwright/test';
import { SignInForm } from '../../page-objects/google-forms/SignInForm';
import { WelcomeForm } from '../../page-objects/google-forms/WelcomeForm';

let signInForm: SignInForm;
let welcomeForm: WelcomeForm;


  test('shuold validate create a account scenario', async ({ page }) => {
    signInForm = new SignInForm(page)
    welcomeForm = new WelcomeForm(page);

    await test.step("step 1: Navigate to Google account page", async ()=>{
      await signInForm.navigate();
    })

    await test.step("step 2: Click on create new account", async ()=>{
      await signInForm.createAccountButton.click();
    })

    await test.step("step 3: Validate createAccoun menu is appeared", async ()=>{
      await expect(signInForm.createAccountMenu, "createAccoun menu should appear").toBeVisible();
    }) 

  });