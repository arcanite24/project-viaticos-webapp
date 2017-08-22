import { AngularFireAuth } from 'angularfire2/auth';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) {}

  /*
  canActivate(): Observable<boolean> {
    return Observable.from(this.auth)
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
    if 
      (!authenticated) this.router.navigate([ '/login' ]);
    })
  }
  */

  isNullOrUndefined<T>(obj: T | null | undefined): obj is null | undefined {
    return typeof obj === "undefined" || obj === null;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.authState.map(auth => {
      if (this.isNullOrUndefined(auth)) {
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    });
  }
 
}