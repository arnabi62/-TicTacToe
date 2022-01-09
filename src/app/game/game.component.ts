import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  player1="";
  player2=""
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  click()
  {
    localStorage.setItem('Player1',this.player1);
    localStorage.setItem('Player2', this.player2);
    this.route.navigate(['/play'])
  }


}
