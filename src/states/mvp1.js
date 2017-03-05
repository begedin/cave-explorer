import Phaser from 'phaser';
import Player from 'game/sprites/player';

export default class extends Phaser.State {
  init () {}

  create () {
    // start physics
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 100;

    // init player
    let player = new Player({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY
    });

    this.game.add.existing(player);

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
