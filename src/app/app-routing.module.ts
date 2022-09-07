import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AuthGuard } from './shared/guard/auth.guard';


const routes: Routes = [
 { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
//  { path: 'recipes', component: RecipesComponent,  canActivate: [AuthGuard] },
//  { path: 'shopping-list', component: ShoppingListComponent, canActivate: [AuthGuard]},
 { path: 'sign-in', component: SignInComponent },
 { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
