import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { CatService } from './cat.service';
import { Cat } from './cat';

@Component({
	selector: 'cat-detail',
	templateUrl: './cat-detail.component.html',
	styleUrls: [ './cat-detail.component.css' ]
})

export class CatDetailComponent implements OnInit {
	
	cat: Cat;

	constructor(
		private catService: CatService,
		private route: ActivatedRoute,
		private location: Location
	) {}

	ngOnInit(): void {
		this.route.paramMap
			.switchMap((params: ParamMap) => this.catService.getCat(+params.get('id')))
			.subscribe(cat => this.cat = cat);
	}

	goBack(): void {
	  this.location.back();
	}

	save(): void {
	  this.catService.update(this.cat)
	  	.then(() => this.goBack());
	}

}