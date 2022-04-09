import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.css']
})
export class ParentOneComponent implements OnInit {
  num1: string = "";
  num2: string = "";
  Total: number = 0;
  @Input() Addition: number = 0; //Note you need to import Input from @angular/core  

  constructor() { }

  ngOnInit(): void {
  }

  ConvertToInt(val: string): number {
    return parseInt(val);
  }
  getTotalAmt() {
    if (this.num1 && this.num2) {
      this.Total = this.ConvertToInt(this.num1) + this.ConvertToInt(this.num2);
    }
  }

  getUpdatedvalue($event: Event) {
    console.log($event);
    this.Total = Number((<HTMLInputElement>$event.target).value);
  }

}
