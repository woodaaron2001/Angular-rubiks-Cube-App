import { Component, OnInit, HostListener } from '@angular/core';
import {  timeout, TimeoutConfig } from 'rxjs';
import { AlgorithmService } from '../algorithm.service';
import { MOVESET } from '../mock-algorithms';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-algorithm-timer',
  templateUrl: './algorithm-timer.component.html',
  styleUrls: ['./algorithm-timer.component.css']
})
export class AlgorithmTimerComponent implements OnInit {

  constructor(private algorithmService: AlgorithmService,private elementRef: ElementRef) { }

  @HostListener('document:keydown',['$event'])
  handleKeyboardDown(event: KeyboardEvent){
    switch(event.key){
      case ' ':
        switch(this.stage){
          case 0:
            this.startInspection();
            break;
          case 1:
            window.document.body.style.backgroundColor = 'red';

            this.holdStackMat();
            break;
          case 3:
            this.recordTime();
            break;
          case 4:
            this.startInspection();
            break;
          case 7:
            this.startInspection();
            break;
          case 8:
            this.startInspection();
            break;
        }
    }
  }

  @HostListener('document:keyup',['$event'])
  handleKeyboardUp(event: KeyboardEvent){
    switch(event.key){
      case ' ':
        switch(this.stage){
          case 2:
            this.letGoStackMat();
        }
    }
  }



  time: number = 0;
  interval :any;
  stage: number = 0;
  scramble: string = "SOMETHING"
  finalTime:number = 0;

  moveset = MOVESET;

  ngOnInit(): void {
    this.time = 15;
    this.stage = 0;
    this.getScramble();
  }

  getScramble(){
    this.algorithmService.getScramble()
    .subscribe(scramble => this.scramble = scramble);
  }

  startInspection(): void{
    this.stage=0;
    this.time=15;
    this.stage +=1;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if(this.time > 0) {
        this.time--;
      } else {
        this.stage = 7;
      }
    },1000)
  }

  holdStackMat(): void{
    this.stage +=1;
    this.time = 2;
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      if(this.time > 0) {
        this.time--;
      } 
    },1000)
  }

  letGoStackMat(): void{
    if (this.time > 0){
      this.stage = 8;
      clearInterval(this.interval);
    }
    else{
      this.stage =3;
      clearInterval(this.interval);
      this.startTimer();
    }

  }
 
  startTimer(): void{
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      this.time++;
    },1000)
  }

  recordTime(): void{
    console.log("test");
    clearInterval(this.interval);
    this.finalTime = this.time;
    this.stage = 4;
  }


}
