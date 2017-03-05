import Phaser from 'phaser';
import Turret from 'game/sprites/enemies/turret';
import MVP1State from 'game/states/mvp1';

export default class extends MVP1State {
  create() {
    super.create();

    let enemy = new Turret({
      game: this,
      x: 100,
      y: 100
    });

    this.game.add.existing(enemy);
  }
}
