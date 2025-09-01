import { Page, Locator, expect } from "@playwright/test";

export default class AdminPage {

  readonly page: Page;
  private jobbtn: Locator;
  private jobCatbtn: Locator;
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
  private configTab: Locator;
  private modulesubTab: Locator;

  constructor(page: Page) {

    this.page = page;
    this.jobbtn = page.locator("");
    this.modulesubTab = page.locator("");
    this.configTab = page.locator("");
    this.jobCatbtn = page.locator("");
    this.AdminLink = page.locator("");
    this.editbutton = page.locator("");
    this.empName = page.locator("");
    this.empNameSubmit = page.locator("");
    this.sortUsername = page.locator("");
    this.sortAsc = page.locator("");
    this.upgradeButton = this.page.locator("");
    this.maintitle = page.locator("");
    this.admindropdown = page.locator("");
    this.adminSearch = page.locator("");
    this.searchButton = page.locator("");
    this.userRoleElements = page.locator("");
    this.username = page.locator("");
    this.usernamelist = page.locator("");
  }

  /**
   * Click the Admin tab, then the Job sub-tab, and finally the Job Categories sub-tab ;
  */
  public async AdminEdit() {
  }

  /**
  * Opens Admin → clicks username sort → applies ascending.
  * Button/icon should switch to ascending state.
  */
  public async sortUsernamesAsc() {
  }

  /**
   * Clicks Admin, then clicks Upgrade and waits for child tab to open,
   * the URL of the newly opened upgrade page
  */
  public async upgrade() {
  }

  /**
  * Selects "Admin" from the role dropdown, clicks Search,
  * and returns the list of user roles from results.
  */
  public async adminModules() {
  }
}
