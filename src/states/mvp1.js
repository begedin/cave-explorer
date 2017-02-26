import Phaser from 'phaser';
import Mushroom from '../sprites/mushroom';

export default class extends Phaser.State {
  init () {}

  preload () {
    this.load.image('mushroom', 'assets/images/mushroom2.png');
  }

  create () {
    this.mushroom = new Mushroom({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom'
    });

    this.game.add.existing(this.mushroom);
  }

}
