import { CanLoad, Route, UrlSegment } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Observable, of } from "rxjs";
import { take, switchMap, tap } from "rxjs/operators";
import { User } from "./user.model";
import { RouterExtensions } from "nativescript-angular/router";

@Injectable()
export class AuthGuard implements CanLoad {
    constructor(
        private authService: AuthService,
        private router: RouterExtensions
    ) { }

    canLoad(route?: Route, segments?: UrlSegment[]): Observable<boolean> {
        return this.authService.user.pipe(
            take(1),
            switchMap((currentUser: User) => {
                if (!currentUser || !currentUser.token) {
                    return this.authService.autoLogin();
                }
                return of(true);
            }),
            tap((isAuth: boolean) => {
                if (!isAuth) {
                    this.router.navigate(['/auth']);
                }
            })
        )
    }
}
