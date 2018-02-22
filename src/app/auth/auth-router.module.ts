import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingupComponent } from './singup/singup.component';
import { SigninComponent } from './signin/signin.component';


const authRoutes: Routes = [
    {path: 'signup' , component: SingupComponent},
    {path: 'signin' , component: SigninComponent}
];
@NgModule({
    imports: [RouterModule.forChild(authRoutes) ],
    exports: [RouterModule]
})
export class AuthRouterModule {}
