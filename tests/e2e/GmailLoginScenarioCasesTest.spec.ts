import { test, expect } from '@playwright/test';
import { SignInForm } from '../../page-objects/google-forms/SignInForm';
import { WelcomeForm } from '../../page-objects/google-forms/WelcomeForm';
import { Inbox } from '../../page-objects/InboxPage';


const testData = [
  { mail: "", password: "A12B34C56", validMail: false, validPassword: true },
  { mail: " mishpachatkook", password: "A12B34C56", validMail: true, validPassword: true },
  { mail: " ", password: "A12B34C56", validMail: false, validPassword: true },
  { mail: "MISHPACHATKOOK", password: "A12B34C56", validMail: true, validPassword: true },
  { mail: "mishpachatkook@gmail.com", password: "A12B34C56", validMail: true, validPassword: true },
  { mail: "mishpachatkook@gmail.ooo", password: "A12B34C56", validMail: false, validPassword: true },
  { mail: "mishpachatkook", password: "A12B34C56", validMail: true, validPassword: true },
  { mail: "mishpachatkook", password: "1234", validMail: true, validPassword: false },
  { mail: "mishpachatkook", password: "", validMail: true, validPassword: false },
  { mail: "mishpachatkook", password: " ", validMail: true, validPassword: false },

];

test.describe("Gmail Login Scenario", () => {
  let signInForm: SignInForm;
  let welcomeForm: WelcomeForm;
  let inbox: Inbox;


  testData.forEach(({ mail, password, validMail, validPassword }) => {
    test(`Should validate application response for login with email: ${mail}, password: ${password}`, async ({ page }) => {
      signInForm = new SignInForm(page)
      welcomeForm = new WelcomeForm(page);
      inbox = new Inbox(page);

      await test.step("step 1: Navigate to Google account page", async () => {
        await signInForm.navigate();
      })


      await test.step("step 2: Fill an account", async () => {
        await signInForm.emailInput.fill(mail);
      })

      await test.step("step 3: Click next", async () => {
        await signInForm.nextButton.click();
      })

      if (!validMail) {
        await test.step("step 4: Validate error message", async () => {
          expect(await signInForm.errorMessage.isVisible(), "Error message should appear").toBeTruthy();
        })
      }

      else {
        await test.step("step 4: Validate you are sign in", async () => {
          await expect(welcomeForm.welcomeTitle, "Welcome title should be visible").toBeVisible();
        })

        await test.step("step 5: Fill a password", async () => {
          await welcomeForm.passwordInput.fill(password);
          await welcomeForm.waitForPageToLoad();
        })

        await test.step("step 6: Click next", async () => {
          await welcomeForm.nextButton.click();
        })

        if (!validPassword) {
          await test.step("step 7: Validate error message", async () => {
            await expect(welcomeForm.errorMessage, "Error message should appear").toHaveText("Enter your password");
          })
        }
        else {
          await test.step("step 7: Validate you are signed in", async () => {
            await expect(inbox.gmailLogo, "Welcome title shold be visible").toHaveText('Welcome, קוק', { timeout: 15000 });
          })

        }
      }

    });
  });
});



