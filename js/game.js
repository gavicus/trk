let config = {
  type: Phaser.AUTO,
  width: 300,
  height: 300,
  scene: [StarsScene],
  physics: {
    default: "arcade",
    arcade: {
      gravity: {x:0, y:0},
    }
  },
};

let game = new Phaser.Game(config);
