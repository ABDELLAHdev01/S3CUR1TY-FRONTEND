import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from 'src/app/service/user.service';
import * as UserActions from '../user/user-action';
import { TokenService } from 'src/app/service/token.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';



@Injectable()
export class UserEffects {

    register$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.register),
        mergeMap((action) =>
          this.userService.RegisterUser(action.user).pipe(
            map(user => {
              // Assuming the token is a property on the user object
              if (user.token){
                this.tokenService.saveToken(user.token)
              }
              this.tokenService.saveUser(user.firstName , user.lastName , user.email) ;

             
              return UserActions.registerSuccess({ user });
            }),
            catchError(error => of(UserActions.registerFailure({ error: error.message })))
          )
        )
      ));

   


      login$ = createEffect(() => this.actions$.pipe(
        ofType(UserActions.login),
        mergeMap((action) =>
          this.userService.loginUser(action.user).pipe(
            map(user => {
              // Assuming the token is a property on the user object
              if (user.token){
                this.tokenService.saveToken(user.token)
              }
   
             
              return UserActions.loginSuccess({ user });
            }),
            catchError(error => of(UserActions.loginFailure({ error: error.message })))
          )
        )
      ));

      loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loginSuccess),
      tap(() => this.router.navigateByUrl('/dashboard'))  
    ),
    { dispatch: false }  
  );

  registerSuccefully$ = createEffect(() =>
  this.actions$.pipe(
    ofType(UserActions.registerSuccess),
    tap(() => this.router.navigateByUrl('/dashboard'))  
  ),
  { dispatch: false }  
);


    constructor(
    private actions$: Actions,
    private userService: UserService,
    private tokenService: TokenService,
    private router : Router

    ){}
}

