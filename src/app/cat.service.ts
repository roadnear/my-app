import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Cat } from './cat';

@Injectable()

export class CatService {
	private catsUrl = 'api/cats';
	private headers = new Headers( {'Content-Type': 'application/json'} );

	constructor(private http: Http) {}

	getCats(): Promise<Cat[]> {
		return this.http.get(this.catsUrl)
			.toPromise()
			.then(response => response.json().data as Cat[])
			.catch(this.handleError);
	}

	getCat(id: number): Promise<Cat> {
		const url = `${this.catsUrl}/${id}`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json().data as Cat)
			.catch(this.handleError);
	}

	update(cat: Cat): Promise<Cat> {
		const url = `${this.catsUrl}/${cat.id}`;
		return this.http
			.put(url, JSON.stringify(cat), { headers: this.headers })
			.toPromise()
			.then(() => cat)
			.catch(this.handleError);
	}

	create(name: string): Promise<Cat> {
		return this.http
			.post(this.catsUrl, JSON.stringify({ name: name }), { headers: this.headers })
			.toPromise()
			.then(res => res.json().data as Cat)
			.catch(this.handleError);
	}

	delete(id: number): Promise<void> {
		const url = `${this.catsUrl}/${id}`;
		return this.http.delete(url, { headers: this.headers })
			.toPromise()
			.then(() => null)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occured: ', error);
		return Promise.reject(error.message || error);
	}
}