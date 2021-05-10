import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  player = "You";
  machine = "Machine";

  @ViewChild('youPlayer') childOne: CounterComponent;
  @ViewChild('machinePlayer') childTwo: CounterComponent;

  getWinner(winnerEvent){
    if (winnerEvent == "win") {
      this.childOne.contador();
    } else if (winnerEvent == "lose") {
      this.childTwo.contador();
    }
  }

}
