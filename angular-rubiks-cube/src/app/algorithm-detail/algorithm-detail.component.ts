import { Component, OnInit, Input } from '@angular/core';
import { algorithm } from '../algorithm';
import { AlgorithmService } from '../algorithm.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-algorithm-detail',
  templateUrl: './algorithm-detail.component.html',
  styleUrls: ['./algorithm-detail.component.css']
})
export class AlgorithmDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private algorithmService: AlgorithmService,
    private location: Location
  ) {}

  algo: algorithm | undefined;

  ngOnInit(): void {
    this.getAlgorithm();
  }

  getAlgorithm(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.algorithmService.getAlgorithm(id)
      .subscribe(algo => this.algo = algo);
  }

  goBack(): void{
    this.location.back();
  }

}
