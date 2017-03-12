import Phaser from 'phaser';
import Player from 'game/sprites/player';
import Turret from 'game/sprites/enemies/turret';

export default class extends Phaser.State {
  init () {}

  create () {
    this.enablePhysics();
    this.enableExitOnEsc();
    this.loadTileMap();
    this.addPlayer();
    this.addTurret();
  }

  update() {
    this.game.physics.arcade.collide(this.player, this.walls);
  }

  enablePhysics() {
    // start physics
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 100;
  }

  enableExitOnEsc() {
    // handle menu navigation
    let escKey = this.game.input.keyboard.addKey(Phaser.Keyboard.ESC);
    escKey.onDown.add(goToMainMenu, this);
  }

  loadTileMap() {
    this.map = this.game.add.tilemap('level');

    this.map.addTilesetImage('default', 'tiles');

    this.background = this.map.createLayer('background');
    this.walls = this.map.createLayer('walls');

    this.map.setCollisionBetween(1, 100000, true, 'walls');

    this.background.resizeWorld();
  }

  addPlayer() {
    // init player
    this.player = new Player({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY
    });

    this.game.add.existing(this.player);
  }

  addTurret() {
    let enemy = new Turret({
      game: this.game,
      player: this.player,
      x: 100,
      y: 100
    });

    this.game.add.existing(enemy);
  }
}

function goToMainMenu() {
  this.state.start('Game');
}
