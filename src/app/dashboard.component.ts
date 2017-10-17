import { Component, OnInit } from '@angular/core';

import { Cat } from './cat';
import { CatService } from './cat.service';


@Component({
	selector: 'my-dashboard',
	templateUrl: './dashboard.component.html',
	providers: [CatService]
})

export class DashboardComponent implements OnInit {
	cats: Cat[] = [];

	constructor(private catService: CatService) { }

	ngOnInit(): void {
		this.catService.getCats().then(cats => this.cats = cats.slice(1, 5));
	}
}