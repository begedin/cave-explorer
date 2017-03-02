import Phaser from 'phaser';

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const itemText = 'MVP 1 - Movement Physics';
    let item = this.add.text(this.world.centerX, 80, itemText);
    item.font = 'Bangers';
    item.padding.set(10, 16);
    item.fontSize = 40;
    item.fill = '#77BFA3';
    item.smoothed = false;
    item.anchor.setTo(0.5);
    item.inputEnabled = true;
    item.events.onInputDown.add(() => {
      this.state.start('MVP1');
    });
  }

  render () {
  }
}
