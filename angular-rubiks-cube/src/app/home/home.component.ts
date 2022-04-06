import { Component, OnInit } from '@angular/core';
import { algorithm } from '../algorithm';
import { AlgorithmService } from '../algorithm.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private algorithmService: AlgorithmService) { }

  algoList: algorithm[] = [];

  ngOnInit(): void {
    this.getAlgorithms();
  }

  getAlgorithms(): void{
    this.algorithmService.getAlgorithms()
    .subscribe(algoList => this.algoList = algoList.slice(0,3));
  }




}
