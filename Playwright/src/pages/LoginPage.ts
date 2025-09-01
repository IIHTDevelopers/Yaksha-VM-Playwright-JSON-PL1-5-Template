import { Locator, Page } from "@playwright/test";

const data = JSON.parse(JSON.stringify(require('../Data/login.json')));

export class LoginPage {
  readonly page: Page;
  private usernameInput: Locator;           // Username input field
  private passwordInput: Locator;           // Password input field
  private loginButton: Locator;             // Login button
  private loginErrorMessage: Locator;       // (To be used) Login error message
  private admin: Locator;                   // (To be used) Admin menu locator
  private logOut: Locator;                  // (To be used) Logout option locator

  constructor(page: Page) {

    this.page = page;
    this.usernameInput = page.locator("");
    this.passwordInput = page.locator("");
    this.loginButton = page.locator("");
    this.loginErrorMessage = page.locator(``);
    this.admin = page.locator('');
    this.logOut = page.locator("");
  }

  /**
   * Perform login with valid credentials from test data
   * - Fills in username and password
   * - Clicks the login button
  */
  async performLogin() {
  }
}

module.exports = { LoginPage };
