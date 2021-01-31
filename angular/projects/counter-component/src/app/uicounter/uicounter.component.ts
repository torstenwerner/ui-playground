import { Component } from '@angular/core';

@Component({
  templateUrl: './uicounter.component.html',
  styleUrls: ['./uicounter.component.css']
})
export class UICounterComponent {

  public counter : number = 0;

  increment(){
    this.counter += 1;
  }

  decrement(){
    this.counter -= 1;
  }

  submit() {
    fetch(`/api/save/${this.counter}`, {method: "POST"}).then(response => {
      const event = new CustomEvent('submit', {
        detail: {
          message: 'Submitted value successfully',
          value: this.counter
        },
        bubbles: true
      });
      //this.nativeElement.dispatchEvent(event);
    });
  }
}
