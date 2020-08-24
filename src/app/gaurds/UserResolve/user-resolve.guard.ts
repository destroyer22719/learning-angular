import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/service/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveGuard implements Resolve<IUser[]> {
  constructor(private userService:UserService){}
  resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): IUser[] {
    return this.userService.getUsers();
  }
  
}
