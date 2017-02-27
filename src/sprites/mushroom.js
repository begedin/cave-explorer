import Phaser from 'phaser';

export default class extends Phaser.Sprite {

  constructor ({ game, x, y }) {
    super(game, x, y, 'mushroom');
    this.anchor.setTo(0.5);
    this.game.physics.enable([ this ], Phaser.Physics.ARCADE);
  }

  update () {
    this.body.angularAcceleration = 0;

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        this.body.angularAcceleration -= 200;
    } else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        this.body.angularAcceleration += 200;
    }
  }
}
