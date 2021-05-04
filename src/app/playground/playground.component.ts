import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RPS_LIST } from '../PicList';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  constructor() { }
  playerRPS: number;
  machineRPS: number;
  result: number;
  winner: string;
  list = RPS_LIST;
  @Output()
  propagate = new EventEmitter<string>();

  ngOnInit(): void {
  }

  playRPS(): void {
    this.machineRPS = this.randomChoice();
    console.log("Machine: " + this.machineRPS);
    this.winner = this.whoWon(this.playerRPS, this.machineRPS);
    this.propagate.emit(this.winner);
  }

  choice(playerChoice: number): void {
    this.playerRPS = playerChoice;
    console.log("Player: " + this.playerRPS);
    this.playRPS();
  }

  randomChoice(): number {
    return Math.ceil(Math.random() * 3) - 1;
  }

  whoWon(player: number, machine: number): string {
    this.result = player - machine;
    if(this.result == 0){
      return "draw";
    } else if(this.result == 1 || this.result == -2){
      return "win";
    } else {
      return "lose";
    }
  }

}
