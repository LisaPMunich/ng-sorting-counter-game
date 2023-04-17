import {Component, EventEmitter, OnDestroy, Output} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
  animations: [
    trigger('startButtonState', [
      state('activeStart', style({
        backgroundColor: 'green',
        opacity: 1,
        color: 'white',
        border: '1px solid green',
        boxShadow: '0 0 10px white',
        transform: 'translateX(0)'
      })),
      state('inactiveStart', style({
        backgroundColor: 'light-green',
        opacity: 0.8,
        color: 'black',
        border: '1px solid light-green',
        boxShadow: 'none',
        transform: 'translateX(0)'
      })),
      transition('* => inactiveStart', [animate('0.2s')]),
      transition('* => activeStart', [
        animate('0.1s', keyframes([
          style({ transform: 'translateX(-5px)', offset: 0.1 }),
          style({ transform: 'translateX(5px)', offset: 0.2 }),
          style({ transform: 'translateX(-5px)', offset: 0.3 }),
          style({ transform: 'translateX(5px)', offset: 0.4 }),
          style({ transform: 'translateX(-5px)', offset: 0.5 }),
          style({ transform: 'translateX(5px)', offset: 0.6 }),
          style({ transform: 'translateX(-5px)', offset: 0.7 }),
          style({ transform: 'translateX(5px)', offset: 0.8 }),
          style({ transform: 'translateX(-5px)', offset: 0.9 }),
          style({ transform: 'translateX(0)', offset: 1.0 })
        ]))]),

    ]),
    trigger('stopButtonState', [
      state('activeStop', style({
        backgroundColor: 'dark-red',
        opacity: 1,
        color: 'white',
        border: '1px solid dark-red',
        boxShadow: '0 0 10px white',
        transform: 'translateX(0)'
      })),
      state('inactiveStop', style({
        backgroundColor: 'light-red',
        opacity: 0.8,
        color: 'black',
        border: '1px solid light-red',
        boxShadow: 'none',
        transform: 'translateX(0)'
      })),
      transition('* => inactiveStop', [
        animate('0.2s')]),
      transition('* => activeStop', [
        animate('0.1s', keyframes([
          style({ transform: 'translateX(-5px)', offset: 0.1 }),
          style({ transform: 'translateX(5px)', offset: 0.2 }),
          style({ transform: 'translateX(-5px)', offset: 0.3 }),
          style({ transform: 'translateX(5px)', offset: 0.4 }),
          style({ transform: 'translateX(-5px)', offset: 0.5 }),
          style({ transform: 'translateX(5px)', offset: 0.6 }),
          style({ transform: 'translateX(-5px)', offset: 0.7 }),
          style({ transform: 'translateX(5px)', offset: 0.8 }),
          style({ transform: 'translateX(-5px)', offset: 0.9 }),
          style({ transform: 'translateX(0)', offset: 1.0 })
        ]))]),
    ]),
  ]
})
export class GameControlComponent implements OnDestroy {
  @Output() counter = new EventEmitter<number>();
  private intervalId = 0;
  counterValue = 0;
  private isCounterRunning = false;
  startButtonState = 'inactiveStart';
  stopButtonState = 'inactiveStop';


  startCounter() {
    if (!this.isCounterRunning) {
      this.stopButtonState = 'inactiveStop';
      this.startButtonState = 'activeStart';
      this.isCounterRunning = true;
      this.intervalId = setInterval(() => {
        if (this.isCounterRunning) {
          this.counterValue++;
          this.counter.emit(this.counterValue + 1);
        }
      }, 1000);
    }
  }

  stopCounter() {
    this.isCounterRunning = false;
    this.stopButtonState = 'activeStop';
    this.startButtonState = 'inactiveStart';
  }


  ngOnDestroy() {
    clearInterval(this.intervalId);
  }


}
