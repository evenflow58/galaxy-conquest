import Phaser from "phaser";

export class TextButton extends Phaser.GameObjects.Container {
  private pointerUpCallback: Function | undefined;
  private pointerDownCallback: Function | undefined;
  private rectangle: Phaser.GameObjects.Graphics;
  private text: Phaser.GameObjects.Text;

  constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    width: number,
    height: number,
    text: string
  ) {
    super(scene);

    this.rectangle = new Phaser.GameObjects.Graphics(scene, { x, y });
    this.rectangle
      .strokeRoundedRect(x, y, width, height)
      .lineStyle(10, 0xff0000);

    this.text = new Phaser.GameObjects.Text(scene, x + 100, y + 100, text, {
      color: "white",
      backgroundColor: "green",
    });

    this.add(this.rectangle).add(this.text);

    Phaser.Display.Align.In.Center(this.text, this.rectangle, 0.5, 0.5);

    // this.rectangle
    //   .setInteractive({ useHandCursor: true })
    //   .on("pointerover", () => this.enterButtonHoverState())
    //   .on("pointerout", () => this.enterButtonRestState())
    //   .on("pointerdown", () => {
    //     this.enterButtonActiveState();
    //     this.pointerDownCallback?.();
    //   })
    //   .on("pointerup", () => {
    //     this.enterButtonHoverState();
    //     this.pointerUpCallback?.();
    //   });
  }

  public onPointerUp(callback: Function): TextButton {
    this.pointerUpCallback = callback;
    return this;
  }

  public onPointerDown(callback: Function): TextButton {
    this.pointerDownCallback = callback;
    return this;
  }

  private enterButtonActiveState() {
    this.text.setStyle({ color: "#0ff" });
  }

  private enterButtonHoverState() {
    this.text.setStyle({ color: "#ff0" });
  }

  private enterButtonRestState() {
    this.text.setStyle({ color: "#0f0" });
  }
}
