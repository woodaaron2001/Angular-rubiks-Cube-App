import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlgorithmListComponent } from './algorithm-list/algorithm-list.component';
import { AlgorithmDetailComponent } from './algorithm-detail/algorithm-detail.component';
import { HomeComponent } from './home/home.component';
import { AlgorithmCategoriesComponent } from './algorithm-categories/algorithm-categories.component';
import { AlgorithmTimerComponent } from './algorithm-timer/algorithm-timer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule,MatIconRegistry } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer } from "@angular/platform-browser";
import {MatGridListModule} from '@angular/material/grid-list';
import { YouTubePlayerModule } from "@angular/youtube-player";
import {MatRippleModule} from '@angular/material/core';
import { AngularDigitalClockComponent } from 'angular-digital-clock';
import { AngularDigitalClockModule } from 'angular-digital-clock';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    AlgorithmListComponent,
    AlgorithmDetailComponent,
    HomeComponent,
    AlgorithmCategoriesComponent,
    AlgorithmTimerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    YouTubePlayerModule,
    MatRippleModule,
    AngularDigitalClockModule,
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer){
    this.matIconRegistry.addSvgIcon(
      'rubiks',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/rubiks.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'arrowss',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/arrowss.svg')
    );
  }
 }
