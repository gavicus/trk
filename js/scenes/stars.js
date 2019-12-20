class StarsScene extends Phaser.Scene {
  constructor() {
    super({key: 'StarsScene'});
  }

  preload() {
    this.load.image('ent1', 'assets/ent1.png');
    this.load.image('kling', 'assets/kling.png');
    this.load.image('star', 'assets/star.png');

    this.load.image('back1', 'assets/background/back1.jpg');
    this.load.image('starfield1', 'assets/background/stars1.jpg');
    this.load.image('starfield2', 'assets/background/stars2.gif');
  }

  create() {
    const { sys: { game: { config: { width, height } } } } = this;

    this.back1 = this.add.tileSprite(0, 0, 1200, 794, 'back1');
    this.back1.setOrigin(0, 0);
    this.back1.setScrollFactor(0);
    this.back1.setAlpha(0.9);

    this.starfield1 = this.add.tileSprite(0, 0, 599, 598, 'starfield1');
    this.starfield1.setOrigin(0, 0);
    this.starfield1.setScrollFactor(0);
    this.starfield1.setAlpha(0.6);
    this.starfield1.blendMode = Phaser.BlendModes.ADD;

    this.starfield2 = this.add.tileSprite(0, 0, 599, 598, 'starfield2');
    this.starfield2.setOrigin(0, 0);
    this.starfield2.setScrollFactor(0);
    this.starfield2.setAlpha(0.6);
    this.starfield2.blendMode = Phaser.BlendModes.ADD;

    this.player = new Player(this, width/2, height/2, 'ent1');
    this.cameras.main.startFollow(this.player);

    const another = new Player(this, width/2+50, height/2, 'kling');

    // input
    this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    console.log('camera',this.cameras.main);
  }

  update() {
    // input events
    if (this.keyW.isDown) { this.player.accelerate(true); }
    if (this.keyS.isDown) { this.player.accelerate(false); }
    if (this.keyA.isDown) { this.player.turn(true); }
    if (this.keyD.isDown) { this.player.turn(false); }
    this.player.update();

    // background
    let mult = 0.1;
    this.back1.tilePositionX = this.cameras.main.scrollX * mult;
    this.back1.tilePositionY = this.cameras.main.scrollY * mult;

    mult = 0.2;
    this.starfield1.tilePositionX = this.cameras.main.scrollX * mult;
    this.starfield1.tilePositionY = this.cameras.main.scrollY * mult;

    mult = 0.3;
    this.starfield2.tilePositionX = this.cameras.main.scrollX * mult;
    this.starfield2.tilePositionY = this.cameras.main.scrollY * mult;
  }
}

/*
const starsScene = new Phaser.Scene('Main');
const keys = {};
const stars = [];
let ship;
let kling;

starsScene.preload = function() {
  this.load.image('ent1', 'assets/ent1.png');
  this.load.image('kling', 'assets/kling.png');
  this.load.image('star', 'assets/star.png');

  this.load.image('back1', 'assets/background/back1.jpg');
};

starsScene.create = function() {
  const { sys: { game: { config: { width, height } } } } = this;

  this.back1 = this.add.tileSprite(0, 0, 1200, 794, 'back1');
  this.back1.setOrigin(0, 0);
  this.back1.setScrollFactor(0);
  this.back1.setAlpha(0.5);

  const starCount = 10;
  for (let i=0; i<starCount; ++i) {
  }

  this.player = new Player(this, width/2, height/2, 'ent1');
  this.cameras.main.startFollow(this.player);
}

starsScene.getScreenSize = function() {
  const { sys: { game: { config: { width, height } } } } = this;
  return new Point(width, height);
}

starsScene.move = function() {
  if (this.player.getSpeed() === 0) { return; }
  this.player.move();
};

const turn = function(direction) {
  const increment = Math.PI/12;
  const magnitude = 1;
  this.player.changeFacing(direction === 'left');
};

starsScene.handleKeyboard = function(event) {
  switch (event.key) {
    case 'w': return this.player.accelerate(true);
    case 's': return this.player.accelerate(false);
    case 'a': return turn('left');
    case 'd': return turn('right');
  };
};

starsScene.init = function() {
  this.input.keyboard.on('keydown', function(event){
    starsScene.handleKeyboard(event);
  });
};

starsScene.update = function() {
  this.move();
};
*/
