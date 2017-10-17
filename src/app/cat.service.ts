import { Injectable } from '@angular/core';
import { Cat } from './cat';
import { CATS } from './mock-cats';

@Injectable()

export class CatService {
	getCats(): Promise<Cat[]> {
		return new Promise(resolve => {
		    resolve(CATS);
		});
	}
}