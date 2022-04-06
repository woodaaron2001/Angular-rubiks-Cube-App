import { Injectable } from '@angular/core';
import { algorithm } from './algorithm';
import { ALGORITHMS,CATEGORIES, MOVESET } from './mock-algorithms';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmService {

  constructor() { }

  getCategories(): Observable<string[]>{
    const categories = of(CATEGORIES);
    return categories;
  }

  getScramble(): Observable<string>{
    var scramble = '';
    const moveset = MOVESET;
    for(var i =0; i < 10 ;i++ ){
      scramble += moveset.charAt(Math.floor(Math.random() * moveset.length));
      if(Math.random() > 0.75){
        scramble += "'";
      }
      else if( Math.random() > 0.75){
        scramble += '2';
      }
      scramble += " ";
    }
    return of(scramble);
  }

  getAlgorithms(): Observable<algorithm[]>{
    const algorithms = of(ALGORITHMS);
    return algorithms;
  }


  getAlgorithm(id: number): Observable<algorithm>{
    const algorithm = ALGORITHMS.find(h => h.id === id)!;
    return of(algorithm);
  }


  getAlgorithmByCategory(category: string,): Observable<algorithm[]>{
    const algorithm = ALGORITHMS.filter(algo => algo.category == category)
    return of(algorithm);
  }
}
