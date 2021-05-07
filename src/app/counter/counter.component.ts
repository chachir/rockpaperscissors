import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {


  @Input() name: string;
  count: number;
  constructor() { }

  ngOnInit(): void {
    this.count = 0;
  }

  contador(): void{
    this.count++;
  };

}


