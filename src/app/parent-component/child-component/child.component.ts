import {Component, OnInit} from '@angular/core';
import {ParentComponent} from '../parent.component';

@Component({
  selector: 'app-child-component',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {

  constructor(private parent: ParentComponent) {
  }

  ngOnInit() {
    this.parent.sayHello();
  }

}
