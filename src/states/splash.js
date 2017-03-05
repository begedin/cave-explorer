import Phaser from 'phaser';
import { centerGameObjects } from 'game/utils';

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');
    centerGameObjects([this.loaderBg, this.loaderBar]);

    this.load.setPreloadSprite(this.loaderBar);
    //
    // load your assets
    //
    this.load.image('player', 'assets/images/player.png');
    this.load.image('turret_base', 'assets/images/turret_base.png');
    this.load.image('turret_gun', 'assets/images/turret_gun.png');
    this.load.image('bullet', 'assets/images/bullet.png');
  }

  create () {
    this.state.start('Game');
  }

}
