import { Page, Locator, expect } from "@playwright/test";
import path from "path";

const filePath = path.resolve(__dirname, "../../TestImage.jpg");

export default class buzzPage {

  readonly page: Page;
  private mostCmntTab: Locator;
  private buzzLink: Locator;
  private cmnt: Locator;
  private sharephoto: Locator;
  private buzzImage: Locator;
  private submitButton: Locator;
  private successMessage: Locator;
  private photoComment: Locator;
  private firstPostFooter: Locator;
  private likeCount: Locator;
  private likeButton: Locator;
  private commentInput: Locator;
  private firstCommentButton: Locator;
  private latestComment: Locator;
  private editToggle: Locator;
  private editButton: Locator;
  private postEdit: Locator;
  private postButton: Locator;
  private verifyCmnt: Locator;

  constructor(page: Page) {
    this.page = page;
    this.mostCmntTab = page.locator("");
    this.buzzLink = page.locator("");
    this.sharephoto = page.locator("");
    this.buzzImage = page.locator('');
    shareButton: () =>
      this.page.locator(
        "",
      );
    this.submitButton = page.locator("");
    this.successMessage = page.locator("");
    this.photoComment = page.locator('');
    this.firstPostFooter = page.locator("").first();
    this.likeCount = this.firstPostFooter.locator('');
    this.likeButton = this.page.locator("");
    this.commentInput = this.page.locator('');
    this.firstCommentButton = this.page.locator("").first();
    this.latestComment = this.page.locator("");
    this.editToggle = page.locator("(//button[@type='button'])[9]");
    this.editButton = page.locator("");
    this.postEdit = this.page.locator("");
    this.postButton = this.page.locator("");
    this.verifyCmnt = this.page.locator("");
    this.cmnt = this.page.locator("");
  }

  /**
   * Uploads a photo post and returns the success message text.
  */
  async SharePhotoPost(editcmnt: string) {
  }

  /**
   * Opens the Buzz page and clicks on the
   * "Most Commented Posts" tab.
   *
   * Expected: Tab becomes active (highlighted).
  */
  async mostcommentTab() {
  }

  /**
   * Adds a timestamped comment to the first post and returns the posted comment.
  */
  async addCommentToPost(commentText: string) {
  }

  /**
   * Edits the most recent post using predefined edit text and returns the updated post text.
  */
  public async editPost(editPostText: string) {
  }
}
