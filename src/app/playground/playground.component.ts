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
  message: string;
  list = RPS_LIST;
  @Output()
  propagate = new EventEmitter<string>();

  ngOnInit(): void {
  }

  playRPS(): void {
    this.machineRPS = this.randomChoice();
    this.winner = this.whoWon(this.playerRPS, this.machineRPS);
    this.message = this.shownMessage(this.winner);
    this.propagate.emit(this.winner);
  }

  shownMessage(winner: string): string {
    if(winner == "draw") {
      return "It's a draw!";
    } else {
      return "You " + winner + "!";
    }
  }

  choice(playerChoice: number): void {
    this.playerRPS = null;
    this.machineRPS = null;
    setTimeout(() => 
    { 
      this.playerRPS = playerChoice;
      this.playRPS();
    },
    500);
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
