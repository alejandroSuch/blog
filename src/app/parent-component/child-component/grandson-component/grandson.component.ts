import {Component, OnInit} from '@angular/core';
import {ParentComponent} from '../../parent.component';

@Component({
  selector: 'app-grandson-component',
  templateUrl: './grandson.component.html'
})
export class GrandsonComponent implements OnInit {

  constructor(private parent: ParentComponent) {
  }

  ngOnInit() {
    this.parent.sayHello();
  }

}
