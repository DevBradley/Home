/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 270.51951951951946,
        y: 185.68468468468467
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 270.51951951951946,
        y: 185.68469468468467
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Home" }, this.whenIReceiveHome),
      new Trigger(Trigger.BROADCAST, { name: "About" }, this.whenIReceiveAbout)
    ];
  }

  *whenIReceiveHome() {
    this.costume = "backdrop1";
  }

  *whenIReceiveAbout() {
    this.costume = "backdrop2";
  }
}
