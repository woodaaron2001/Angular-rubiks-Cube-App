import { Component, OnInit } from '@angular/core';
import { algorithm } from '../algorithm';
import { ALGORITHMS } from '../mock-algorithms';
import { AlgorithmService } from '../algorithm.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-algorithm-list',
  templateUrl: './algorithm-list.component.html',
  styleUrls: ['./algorithm-list.component.css']
})
export class AlgorithmListComponent implements OnInit {

  algoType: string = "";
  algoList: algorithm[] = [];

  constructor(
    private route: ActivatedRoute,
    private algorithmService: AlgorithmService,
    private location: Location
  ) {}

  getAlgorithms(){

    const temp = this.route.snapshot.paramMap.get('category');
    const id = temp !== null ? temp : "OLL";
    console.log(this.route.snapshot.paramMap);
    this.algorithmService.getAlgorithmByCategory(id)
    .subscribe(algoList => this.algoList = algoList);
  }

  ngOnInit(): void {
    this.getAlgorithms();
    this.algoType = this.algoList[0].category;
  }

  goBack(): void{
    this.location.back();
  }
}
