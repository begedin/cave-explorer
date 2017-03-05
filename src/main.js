import 'pixi';
import 'p2';
import Phaser from 'phaser';

import BootState from 'game/states/boot';
import SplashState from 'game/states/splash';
import GameState from 'game/states/game';
import MVP1State from 'game/states/mvp1';
import MVP2State from 'game/states/mvp2';

import config from 'game/config';

class Game extends Phaser.Game {

  constructor () {
    const docElement = document.documentElement;
    const width = docElement.clientWidth > config.gameWidth ? config.gameWidth : docElement.clientWidth;
    const height = docElement.clientHeight > config.gameHeight ? config.gameHeight : docElement.clientHeight;

    super(width, height, Phaser.CANVAS, 'content', null);

    this.state.add('Boot', BootState, false);
    this.state.add('Splash', SplashState, false);
    this.state.add('Game', GameState, false);
    this.state.add('MVP1', MVP1State, false);
    this.state.add('MVP2', MVP2State, false);

    this.state.start('Boot');
  }
}

window.game = new Game();
