import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { CatSearchService } from './cat-search.service';
import { Cat } from './cat';

@Component({
	selector: 'cat-search',
	templateUrl: './cat-search.component.html',
	styleUrls: [ './cat-search.component.css' ],
	providers: [ CatSearchService ]
})

export class CatSearchComponent implements OnInit {
	cats: Observable<Cat[]>;
	private searchTerms = new Subject<string>();

	constructor(
		private router: Router,
		private catSearchService: CatSearchService
	) {}

	search(term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit(): void {
		this.cats = this.searchTerms
			.debounceTime(300)
			.distinctUntilChanged()
			.switchMap(term => term ? this.catSearchService.search(term) : Observable.of<Cat[]>([]))
			.catch(error => {
				console.log('Error occured: ', error);
				return Observable.of<Cat[]>([]);
			});
	}

	gotoCatDetail(cat: Cat): void {
		let link = ['/detail', cat.id];
		this.router.navigate(link);
	}
}