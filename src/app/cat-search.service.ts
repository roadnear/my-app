import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Cat } from './cat';

@Injectable()

export class CatSearchService {
	constructor(private http: Http) {}

	search(term: string): Observable<Cat[]> {
		return this.http
			.get(`api/cats/?name=${term}`)
			.map(response => response.json().data as Cat[]);
	}
}