import Phaser from 'phaser';

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const bannerText = 'MVP 1 - Movement Physics';
    let banner = this.add.text(this.world.centerX, 80, bannerText);
    banner.font = 'Bangers';
    banner.padding.set(10, 16);
    banner.fontSize = 40;
    banner.fill = '#77BFA3';
    banner.smoothed = false;
    banner.anchor.setTo(0.5);
    banner.inputEnabled = true;
    banner.events.onInputDown.add(() => {
      this.state.start('MVP1');
    });
  }

  render () {
  }
}
