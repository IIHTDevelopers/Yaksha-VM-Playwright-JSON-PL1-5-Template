import { Locator, Page } from "@playwright/test";
import path from "path";

// ✅ Resolving the path to the image used for upload
const filePath = path.resolve(__dirname, "../../TestImage.jpg");

/**
 * Page Object Model for the "My Info" section of the application.
 */
export class MyInfoPage {
  readonly page: Page;

  //  Locators for elements in the My Info section
  private Myinfo: Locator;
  private clickImage: Locator;
  private uploadButton: Locator;
  private fileInput: Locator;
  private ImageSave: Locator;
  private helpbutton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.Myinfo = page.locator("");
    this.clickImage = page.locator("");
    this.uploadButton = page.locator("");
    this.fileInput = page.locator('');
    this.ImageSave = page.locator("");
    this.helpbutton = page.locator("");
  }

  /**
   * Navigates to My Info, uploads a profile image, and saves it.
   */
  async myinfo() {
  }

  /**
   * Hovers over the help button and returns the tooltip text.
   * @returns string Tooltip text shown on hover
   */
  public async helpHover(): Promise<string> {
    return "";
  }
}
