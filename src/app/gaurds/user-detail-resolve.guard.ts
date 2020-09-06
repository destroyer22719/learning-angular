import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/service/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailResolveGuard implements Resolve<IUser[]> {
  user:any
  constructor(private userService:UserService){}
  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):any {
      return this.user = this.userService.getUserByIdByREST(next.params['id'])
  } 
}
