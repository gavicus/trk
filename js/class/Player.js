class Player extends Ship {
  constructor(scene, x, y, key) {
    super(scene, x, y, key, 'Player');
    this.setData('accel', 4)
    this.setData('turn', Math.PI/12);
    this.setData('maxSpeed',200);
  }

  accelerate(faster) {
    let speed = this.body.speed;
    let maxSpeed = this.getData('maxSpeed');
    let accel = this.getData('accel');
    if (!faster) { accel = -accel; }
    speed += accel;
    if (speed < 0) { speed = 0; }
    if (speed > maxSpeed) { speed = maxSpeed; }
    this.body.setVelocity(
      speed * Math.cos(this.rotation),
      speed * Math.sin(this.rotation)
    );
  }

  turn(left) {
    const rate = this.getData('turn');
    let facing = this.rotation;
    if (left) { facing -= rate; }
    else { facing += rate; }
    this.setRotation(facing);
    const speed = this.body.speed;
    this.body.setVelocity(
      speed * Math.cos(this.rotation),
      speed * Math.sin(this.rotation)
    );
  };

  update() {
  }
}
