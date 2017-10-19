import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CatDetailComponent } from './cat-detail.component';
import { CatsComponent } from './cats.component';
import { DashboardComponent } from './dashboard.component';
import { CatService } from './cat.service';

@NgModule({
  declarations: [
    AppComponent,
    CatDetailComponent,
    CatsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CatService],
  bootstrap: [AppComponent]
})

export class AppModule { }
