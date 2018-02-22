import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,
   RouterStateSnapshot, Route, CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    return this.authService.isAuthenticated();
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>
    | Promise<boolean> | boolean {
    return this.authService.isAuthenticated();
  }



  constructor(private authService: AuthService) {
    }
}
