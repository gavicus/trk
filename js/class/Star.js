class Star {
  constructor(sprite, place, scale) {
    this.sprite = sprite;
    this.place = place.clone();
    this.screen = place.clone();
    this.scale = scale;
    this.sprite.alpha = this.scale;
    this.sprite.setScale(this.scale);
  }

  getScreen () {
    return this.screen.clone();
  }

  setFocus (f, screenSize) {
    const dx = f.x * this.scale;
    const dy = f.y * this.scale;
    let x = this.place.x - dx;
    let y = this.place.y - dy;
    while (x < 0) { x += screenSize.x; }
    while (x > screenSize.x) { x -= screenSize.x; }
    while (y < 0) { y += screenSize.y; }
    while (y > screenSize.y) { y -= screenSize.y; }
    this.screen.set(x,y);
    this.sprite.x = x;
    this.sprite.y = y;
  }
}
