import { Component, OnInit } from '@angular/core';
import { Cat } from './cat';
import { CatService } from './cat.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <ul class="cats">
      <li [class.selected]="cat === selectedCat" *ngFor="let cat of cats" (click)="onSelect(cat)">
        <div>
          <span class="badge">{{cat.id}}</span> {{cat.name}}
        </div>
      </li>
    </ul>
    <cat-detail [cat]="selectedCat"></cat-detail>
    `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
    }
    .cats {
      margin: 0 0 2em 0;
      list-style: none;
      padding: 0;
      width: 15em;
    }
    .cats li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: 0.5em;
      padding: 0.3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .cats li.selected:hover {
      background-color: #BBD8DC !important;
      color: white
    }
    .cats li:hover {
      color: #607DB8;
      background-color: #DDD;
      left: 0.1em
    }
    .cats .text {
      position: relative;
      top: -3px
    }
    .cats .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px
    }
  `],
  providers: [CatService]
})

export class AppComponent implements OnInit {
  title = 'Tour of Maws';
  cats: Cat[];
  selectedCat: Cat;
  constructor(private catService: CatService) {}

  onSelect(cat: Cat): void {
	this.selectedCat = cat;
  }

  getCats(): void {
  	this.cats = this.catService.getCats();
  }

  ngOnInit(): void {
  	this.getCats();
  }
}
