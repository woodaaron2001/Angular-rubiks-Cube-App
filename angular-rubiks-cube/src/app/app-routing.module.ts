import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlgorithmListComponent } from './algorithm-list/algorithm-list.component';
import { HomeComponent } from './home/home.component';
import { AlgorithmDetailComponent } from './algorithm-detail/algorithm-detail.component';
import { AlgorithmCategoriesComponent } from './algorithm-categories/algorithm-categories.component';
import { AlgorithmTimerComponent } from './algorithm-timer/algorithm-timer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo : '/home',pathMatch: 'full'},
  { path: 'categories', component: AlgorithmCategoriesComponent},
  { path: 'categories/:category', component: AlgorithmListComponent},
  { path: 'detail/:id', component: AlgorithmDetailComponent},
  { path: 'timer', component: AlgorithmTimerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }