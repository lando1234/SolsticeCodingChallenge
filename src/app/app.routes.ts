import { DetailComponent } from './components/detail/detail.component';
import { ListComponent } from './components/list/list.component';
import { Routes } from '@angular/router';




export const ROUTES: Routes = [
    { path:'list', component:ListComponent},
    { path:'detail/:id', component:DetailComponent},
    { path: '', pathMatch: 'full', redirectTo: 'list' },
    { path: '**', pathMatch: 'full', redirectTo: 'list' }
];

