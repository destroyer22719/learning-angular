import {HomeComponent} from '../components/home/home.component';
import {BlogComponent} from '../components/blog/blog.component';
import {AboutComponent} from '../components/about/about.component';
import {UsersComponent} from '../components/users/users.component';
import{MessageListComponent} from '../components/message-list/message-list.component'
import {UserDetailsComponent} from '../components/user-details/user-details.component'
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../gaurds/auth/auth.guard'
import { ConfirmationGuard } from '../gaurds/confirmation/confirmation.guard';
import { UserService } from '../service/user/user.service';
import {UserResolveGuard} from '../gaurds/UserResolve/user-resolve.guard'
import {PlaceholderComponent} from '../components/placeholder/placeholder.component';
import {UserDetailResolveGuard} from '../gaurds/user-detail-resolve.guard'
import { ParentComponent } from '../components/parent/parent.component';

const appRoutes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'blog', component: BlogComponent, canActivate:[AuthGuard]},
  {path:'about', component:AboutComponent},
  {path:'message', component:MessageListComponent, canDeactivate:[ConfirmationGuard]},
  {path: 'users', component:UsersComponent,
  pathMatch:'prefix',
  resolve:{
    users:UserResolveGuard
  },
  // canActivateChild:[AuthGuard],
  children:[
    {path:':id', component: UserDetailsComponent, resolve:{hello: UserDetailResolveGuard}},
    {path:'', component:PlaceholderComponent}
  ]},
  {path:'parent', component:ParentComponent},
  {path:'**',redirectTo:'/home', pathMatch:'full'}
]

@NgModule({
  providers:[AuthGuard, ConfirmationGuard, UserService],
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
