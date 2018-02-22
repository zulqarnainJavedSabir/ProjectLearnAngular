import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanLoad, PreloadAllModules } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SingupComponent } from './auth/singup/singup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from './auth/auth.guard';



const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'recipes',  loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuard]},
    { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
exports: [RouterModule]
})
export class AppRoutingModule {}
