import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cat } from './cat';
import { CatService } from './cat.service';

@Component({
  selector: 'my-cats',
  templateUrl: 'cats.component.html',
  styleUrls: [ './cats.component.css' ],
  providers: [CatService]
})

export class CatsComponent implements OnInit {
  cats: Cat[];
  selectedCat: Cat;
  constructor(
    private catService: CatService,
    private router: Router
  ) {}

  onSelect(cat: Cat): void {
	  this.selectedCat = cat;
  }

  getCats(): void {
  	this.catService.getCats().then(cats => {
      this.cats = cats;
    });
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedCat.id]);
  }

  ngOnInit(): void {
  	this.getCats();
  }
}
