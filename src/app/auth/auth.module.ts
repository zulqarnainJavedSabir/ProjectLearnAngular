import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "./auth.service";
import { SigninComponent } from "./signin/signin.component";
import { SingupComponent } from "./singup/singup.component";
import { CommonModule } from "@angular/common";
import { AuthRouterModule } from "./auth-router.module";

@NgModule({
    declarations: [
        SigninComponent,
        SingupComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        AuthRouterModule
    ]
})
export class AuthModule {}
