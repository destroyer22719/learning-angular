import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/service/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveGuard implements Resolve<IUser[]> {
  users:any
  constructor(private userService:UserService){}
  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): IUser[] {
    this.userService.getUsersByREST().subscribe(users => users = this.users );
    return this.users
  }
  
}
