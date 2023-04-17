import {Component, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onCounter(counterValue: number) {
    if (counterValue % 2 === 0) {
      this.evenNumbers.push(counterValue);
    } else {
      this.oddNumbers.push(counterValue);
    }
  }
}
