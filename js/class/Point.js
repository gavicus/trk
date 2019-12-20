class Point {
  constructor(x,y){
    this.set(x,y);
  }

  clone () {
    return new Point(this.x, this.y);
  }

  move (d) {
    this.x += d.x;
    this.y += d.y;
  }

  set(x,y) {
    this.x = x;
    this.y = y;
  }

  toString () {
    return `(${this.x}, ${this.y})`;
  }
}
