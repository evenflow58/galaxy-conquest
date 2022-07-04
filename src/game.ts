import Phaser from "phaser";

import MainMenuScene from "./scenes/mainMenu.scene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: [MainMenuScene],
};

export default new Phaser.Game(config);
