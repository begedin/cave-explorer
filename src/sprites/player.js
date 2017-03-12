import Phaser from 'phaser';
import Bullet from 'game/sprites/bullet';
import { scaleObjectToGameSize } from 'game/utils';

export default class extends Phaser.Sprite {

  constructor ({ game, x, y }) {
    super(game, x, y, 'player');

    scaleObjectToGameSize(this);

    this.anchor.setTo(0.5);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    this.body.drag.set(30);
    this.body.maxVelocity.set(300);

    this.body.angularDrag = 200;
    this.body.maxAngular = 200;

    this.body.collideWorldBounds=true;

    this.coolDownTimer = this.game.time.create(false);
    this.coolDownTimer.start();

    this.game.camera.follow(this);
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
    if (!this.onCoolDown) {
      let bullet = new Bullet({
        game: this.game,
        source: this,
      });

      scaleObjectToGameSize(bullet);
      
      this.game.add.existing(bullet);
      this.onCoolDown = true;
      this.coolDownTimer.add(200, () => {
        this.onCoolDown = false;
      });
    }
  }
}
