import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGaurdService implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router) { }

  /* 
  here we want to implement CanActivate Interface, wich is define in @angular/router, 
  so we are going to implement a method called canActivate(){}, wich should return true or false, 
  so here we want to get the authentcation status of the current user, if the user is logged in we're going to 
  return True, otherwise we're going to navigate them to the logging page and retrun false.
  So in order to get the authentification state we need to inject our AuthService.
  We need also navigate non authentified user to login page, so for that we need to inject the router service.
  **/
  canActivate(route, state: RouterStateSnapshot) {
    // here with this map method, we're mapping an obsevable of firebase user to an observable of boolean.
    return this.auth.$user.map(user => {
      if (user) return true;

      /* here we wanna pass a query parameter that determines the retrun Url, but how do we get this retrun url?

      **/
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    });
  }

}
