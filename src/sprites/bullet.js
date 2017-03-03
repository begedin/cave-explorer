import Phaser from 'phaser';

export default class extends Phaser.Sprite {
  constructor ({ game, source }) {
    super(game, source.x, source.y, 'bullet');

    this.anchor.setTo(0.5);
    this.rotation = source.rotation;

    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.allowGravity = false;
    this.game.physics.arcade.velocityFromRotation(source.rotation - Math.PI/2, 300, this.body.velocity);
  }
}
