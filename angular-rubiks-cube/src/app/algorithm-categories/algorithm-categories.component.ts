import { Component, OnInit } from '@angular/core';
import { AlgorithmService } from '../algorithm.service';
import { CATEGORIES } from '../mock-algorithms';

@Component({
  selector: 'app-algorithm-categories',
  templateUrl: './algorithm-categories.component.html',
  styleUrls: ['./algorithm-categories.component.css']
})
export class AlgorithmCategoriesComponent implements OnInit {

  constructor(private algorithmService: AlgorithmService) { }

  categories: string[] = [];

  getCategories(){
    this.algorithmService.getCategories()
    .subscribe(categories => this.categories = categories);
  }

  ngOnInit(): void {
    this.getCategories();
  }

}
