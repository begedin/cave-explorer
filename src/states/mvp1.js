import Phaser from 'phaser';
import Player from 'game/sprites/player';

export default class extends Phaser.State {
  init () {}

  create () {
    // start physics
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 100;

    // simulate 30 by 30 tiled level, with tiles sized 32x32
    this.game.world.setBounds(0, 0, 30*32, 30*32);

    // init player
    this.player = new Player({
      game: this.game,
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
