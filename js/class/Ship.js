class Ship extends Entity {
  constructor(scene, x, y, key, type) {
    super(scene, x, y, key, type);
    const targetWidth = 30;
    const scale = targetWidth / this.width;
    this.setScale(scale);
  }
}

