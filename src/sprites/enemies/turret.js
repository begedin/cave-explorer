import Phaser from 'phaser';
import Bullet from 'game/sprites/bullet';

export default class extends Phaser.Group {

  constructor ({ game, player, x, y }) {
    super(game);

    this.base = new Phaser.Sprite(this.game, x, y, 'turret_base');
    this.add(this.base);
    this.base.anchor.setTo(0.5);

    this.gun = new Phaser.Sprite(this.game, x, y, 'turret_gun');
    this.add(this.gun);
    this.gun.anchor.setTo(0.5);
    this.game.physics.enable(this.gun, Phaser.Physics.ARCADE);
    this.gun.body.allowGravity = false;
    this.gun.body.angularDrag = 200;
    this.gun.body.maxAngular = 200;

    this.coolDownTimer = this.game.time.create(false);
    this.coolDownTimer.start();

    this.player = player;
  }

  update () {
    this.rotateTowardsPlayer();
    if (this.playerIsInView) {
      this.fireBullet();
    }
  }

  fireBullet() {
    if (!this.onCoolDown) {
      let bullet = new Bullet({
        game: this.game,
        source: this.gun,
      });
      this.game.add.existing(bullet);
      this.onCoolDown = true;
      this.coolDownTimer.add(500, () => {
        this.onCoolDown = false;
      });
    }
  }

  get angleFromPlayer() {
    let angle = this.game.physics.arcade.angleBetween(this.gun, this.player);
    return Math.abs(this.gun.rotation - angle) - Math.PI/2;
  }

  get playerIsRight() {
    return (this.angleFromPlayer < 0);
  }

  get playerIsInView() {
    return Math.abs(this.angleFromPlayer) < 0.1 ;
  }

  rotateTowardsPlayer() {
    if (this.playerIsRight) {
      this.gun.body.angularVelocity = 300;
    } else {
      this.gun.body.angularVelocity = -300;
    }

    if (this.playerIsInView) {
      this.gun.body.angularVelocity = 0;
    }
  }
}
