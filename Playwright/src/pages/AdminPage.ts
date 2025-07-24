import { Page, Locator, expect } from "@playwright/test";

/**
 * Page Object Model for the Admin Page
 */
export default class AdminPage {
  readonly page: Page;

  //  Locators for various elements on the Admin page
  private AdminLink: Locator;
  private editbutton: Locator;
  private empName: Locator;
  private empNameSubmit: Locator;
  private sortUsername: Locator;
  private sortAsc: Locator;
  private upgradeButton: Locator;
  private maintitle: Locator;
  private admindropdown: Locator;
  private adminSearch: Locator;
  private searchButton: Locator;
  private userRoleElements: Locator;
  private username: Locator;
  private usernamelist: Locator;

  constructor(page: Page) {
    this.page = page;

    // ✅ Initialize all locators
    this.AdminLink = page.locator('');
    this.editbutton = page.locator("");
    this.empName = page.locator('');
    this.empNameSubmit = page.locator("");
    this.sortUsername = page.locator("");
    this.sortAsc = page.locator("");
    this.upgradeButton = this.page.locator("");
    this.maintitle = page.locator("");
    this.admindropdown = page.locator("");
    this.adminSearch = page.locator('');
    this.searchButton = page.locator('');
    this.userRoleElements = page.locator('');
    this.username = page.locator("");
    this.usernamelist = page.locator('');
  }

  /**
   * Clicks the Admin link and the first edit button
   */
  public async AdminEdit() {
  }

  /**
   * Clicks Admin, then sorts usernames in ascending order,
   * waits for the sorted table, and returns all user roles
   * @returns string[] of trimmed user role texts
   */
  public async adminSortUsername(): Promise<string[]> {
    return [];
  }

  /**
   * Clicks Admin, then clicks Upgrade and waits for child tab to open,
   * and returns the URL of the newly opened upgrade page
   * @returns URL of the child page
   */
  public async upgrade(): Promise<string> {
    return "";
  }

  /**
   * Searches for users with "Admin" role selected from dropdown,
   * clicks Search, and returns the list of user roles shown
   * @returns string[] of trimmed user roles from the search result
   */
  public async adminSearchVerify(): Promise<(string | null)[]> {
    return [];
  }
}
