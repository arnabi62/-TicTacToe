import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
player1=localStorage.getItem('Player1');
player2=localStorage.getItem('Player2')
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  val1=""
  val2=""
  val3=""
  val4=""
  val5=""
  val6=""
  val7=""
  val8=""
  val9=""
  turn = "X";
  c1="white"
 arr =[false, false, false, false,false,false,false,false,false]
 win=false;
 draw = false
fun(i:number)
{
  if(!this.arr[i-1] && !this.win){
  if(i==1 )
  this.val1=this.turn;
  if(i==2 )
  this.val2=this.turn;
  if(i==3 )
  this.val3=this.turn;
  if(i==4)
  this.val4=this.turn;
  if(i==5)
  this.val5=this.turn;
  if(i==6)
  this.val6=this.turn;
  if(i==7)
  this.val7=this.turn;
  if(i==8)
  this.val8=this.turn;
  if(i==9)
  this.val9=this.turn;
  this.arr[i-1]=true;
  this.checkwin();
  this.checkDraw()
  if(this.turn == "X")
    this.turn = "O"
  else
    this.turn = "X"
  }
}
winner=""
play()
{
  this.route.navigate(['/game'])
}
checkwin()
{
  if(this.arr[0]==true && this.arr[1]==true && this.arr[2]==true && this.val1==this.val2 &&this.val2==this.val3)
  {
    this.win=true
   this.winner = this.val1
   this.c1='green'
  }
  if(this.arr[3]==true && this.arr[4]==true && this.arr[5]==true && this.val5==this.val4 &&this.val5==this.val6)
  {
    this.win=true
    this.winner = this.val5
  }
  if(this.arr[6]==true && this.arr[7]==true && this.arr[8]==true && this.val7==this.val8 &&this.val8==this.val9)
  {
    this.win=true
    this.winner = this.val7
  }
  if(this.arr[0]==true && this.arr[3]==true && this.arr[6]==true && this.val1==this.val4 &&this.val4==this.val7)
  {
    this.win=true
    this.winner = this.val1
  }
  if(this.arr[1]==true && this.arr[4]==true && this.arr[7]==true && this.val2==this.val5 &&this.val5==this.val8)
  {
    this.win=true
    this.winner = this.val2
  }
  if(this.arr[2]==true && this.arr[5]==true && this.arr[8]==true && this.val3==this.val6 &&this.val6==this.val9)
  {
    this.win=true
    this.winner = this.val3
  }
  if(this.arr[0]==true && this.arr[4]==true && this.arr[8]==true && this.val1==this.val5 &&this.val5==this.val9)
  {
    this.win=true
    this.winner = this.val1
  }
  if
  (this.arr[2]==true && this.arr[4]==true && this.arr[6]==true && this.val3==this.val5 &&this.val5==this.val7)
  {
    this.win=true
    this.winner = this.val3
  }

}
checkDraw()
{
  if(this.arr[0]==true && this.arr[1]==true && this.arr[2]==true &&
    this.arr[3]==true && this.arr[4]==true && this.arr[5]==true && this.arr[6]==true && this.arr[7]==true && this.arr[8]==true)
  {
    if(this.win==false)
    {
       this.draw=true
    console.log(this.draw)
    }
  }
}
}
