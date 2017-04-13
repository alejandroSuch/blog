import {Component} from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent.component.html'
})
export class ParentComponent {

  constructor() {
  }

  sayHello() {
    alert('hello from parent component!');
  }

}
