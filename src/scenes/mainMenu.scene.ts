import Phaser from "phaser";
import { TextButton } from "../gameObjects/textButton.object";

export default class MenuScene extends Phaser.Scene {
  private loginButton: TextButton | undefined;
  // private loginButton: Phaser.GameObjects.Rectangle | undefined;

  constructor() {
    super("main-menu");
  }

  create() {
    this.loginButton = new TextButton(this, 100, 100, 100, 100, "Login");
    this.add.existing(this.loginButton);
  }

  private googleLogin() {
    console.log("Logging in via google");
  }
}
