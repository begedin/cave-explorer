import Phaser from 'phaser';
import Mushroom from '../sprites/mushroom';

export default class extends Phaser.State {
  init () {}

  preload () {
    this.load.image('mushroom', 'assets/images/mushroom2.png');
  }

  create () {
    // start physics
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 100;

    // init player
    this.player = new Mushroom({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY
    });

    this.game.add.existing(this.player);

    // handle menu navigation
    let escKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
    escKey.onDown.add(goToMainMenu, this);
  }

  update() {
  }
}

function goToMainMenu() {
  this.state.start('Game');
}
