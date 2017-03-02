import Phaser from 'phaser';

export default class extends Phaser.Sprite {

  constructor ({ game, x, y }) {
    super(game, x, y, 'player');
    this.anchor.setTo(0.5);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    this.body.drag.set(50);
    this.body.maxVelocity.set(300);

    this.body.angularDrag = 200;
    this.body.maxAngular = 200;
  }

  update () {
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      this.game.physics.arcade.accelerationFromRotation(this.rotation - Math.PI/2, 200, this.body.acceleration);
    } else {
      this.body.acceleration.set(0);
    }

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.body.angularAcceleration -= 50;
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.body.angularAcceleration += 50;
    } else {
      this.body.angularAcceleration = 0;
    }

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      this.fireBullet();
    }
  }

  fireBullet() {
    console.log('fire bullet');
  }
}
