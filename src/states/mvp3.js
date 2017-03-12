import Phaser from 'phaser';

export default class extends Phaser.State {
  init () {}

  create () {
    // start physics
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 100;

    // handle menu navigation
    let escKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
    escKey.onDown.add(goToMainMenu, this);

    this.map = this.game.add.tilemap('level');

    //the first parameter is the tileset name as specified in Tiled, the second is the key to the asset
    this.map.addTilesetImage('default', 'tiles');

    //create layer
    this.background = this.map.createLayer('background');
    this.walls = this.map.createLayer('walls');

    //collision on blockedLayer
    this.map.setCollisionBetween(1, 100000, true, 'walls');

    //resizes the game world to match the layer dimensions
    this.background.resizeWorld();
  }

  update() {
  }
}

function goToMainMenu() {
  this.state.start('Game');
}
