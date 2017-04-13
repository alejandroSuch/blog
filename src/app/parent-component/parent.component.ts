import {Component, Injector, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {

  constructor(private injector: Injector) {
  }

  ngOnInit() {
  }

  sayHello() {
    alert('hello from parent component!');
  }

}
