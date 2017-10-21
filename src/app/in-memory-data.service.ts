import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Cat } from './cat';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const cats: Cat[] = [
		  {
		    id: 0,
		    name: 'Zero',
		    breed: 'Unknown'
		  },
		  {
		    id: 1,
		    name: 'Fan MingMing',
		    breed: 'Siamese'
		  },
		  {
		    id: 2,
		    name: 'Spot',
		    breed: 'Natural'
		  },
		  {
		    id: 3,
		    name: 'Nono',
		    breed: 'Natural'
		  },
		  {
		    id: 4,
		    name: 'Foot',
		    breed: 'Tuxedo'
		  },
		  {
		    id: 5,
		    name: 'Grey',
		    breed: 'Tuxedo'
		  }
		];

		return {cats};
	}
}