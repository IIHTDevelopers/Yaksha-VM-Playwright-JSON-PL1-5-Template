import { Locator, Page } from "@playwright/test";
import path from "path";

const filePath = path.resolve(__dirname, "../../TestImage.jpg");

export class MyInfoPage {

  readonly page: Page;
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
    this.fileInput = page.locator("");
    this.ImageSave = page.locator("");
    this.helpbutton = page.locator("");
  }

  /**
   * Navigates to My Info, uploads a profile image, and saves it.
  */
  async myinfo() {
  }

  /**
   * Navigate to the My Info tab and Hover over the help button to verify the tooltip text.
  */
  public async helpHover() {
  }
}
