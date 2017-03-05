import Phaser from 'phaser';
import Bullet from 'game/sprites/bullet';

export default class extends Phaser.Sprite {

  constructor ({ game, x, y }) {
    super(game, x, y, 'turret');
    this.anchor.setTo(0.5);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    this.body.allowGravity = false;

    this.body.angularDrag = 200;
    this.body.maxAngular = 200;

    this.coolDownTimer = this.game.time.create(false);
    this.coolDownTimer.start();
  }

  update () {
    this.rotateTowardsPlayer();
    if (this.playerIsInRange()) {
      this.fireBullet();
    }
  }

  fireBullet() {
    if (!this.onCoolDown) {
      let bullet = new Bullet({
        game: this.game,
        source: this,
      });
      this.game.add.existing(bullet);
      this.onCoolDown = true;
      this.coolDownTimer.add(200, () => {
        this.onCoolDown = false;
      });
    }
  }

  rotateTowardsPlayer() {

  }

  playerIsInRange() {
    return true;
  }
}
