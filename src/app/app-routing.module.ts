import { NgModule } from '@angular/core';
import { RouterModule,  Routes} from '@angular/router';

import { CatsComponent } from './cats.component';
import { CatDetailComponent } from './cat-detail.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'cats', component: CatsComponent },
	{ path: 'detail/:id', component: CatDetailComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}
