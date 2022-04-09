import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  @Input() Addition: number = 0;
  @Output() valueUpdate = new EventEmitter();
  num3: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  updateValue(val: any) {
    this.valueUpdate.emit(val * this.Addition);
  }

}
