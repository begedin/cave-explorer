import Phaser from 'phaser';
import Mushroom from '../sprites/mushroom';

export default class extends Phaser.State {
  init () {}

  preload () {
    this.load.image('mushroom', 'assets/images/mushroom2.png');
  }

  create () {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 100;

    this.player = new Mushroom({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    });

    this.game.add.existing(this.player);

    game.physics.enable( [ this.player ], Phaser.Physics.ARCADE);

    let escKey = game.input.keyboard.addKey(Phaser.Keyboard.ESC);
    escKey.onDown.add(goToMainMenu, this);
  }
}

function goToMainMenu() {
  this.state.start('Game');
}
