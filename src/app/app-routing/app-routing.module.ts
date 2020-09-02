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
import { BuiltInStrDirComponent } from '../components/built-in-str-dir/built-in-str-dir.component';
import { BuiltInAttrDirComponent } from '../components/built-in-attr-dir/built-in-attr-dir.component';
import { DirectiveHostComponent } from '../components/directive-host/directive-host.component';
import { NewUserComponent } from '../component/new-user/new-user.component';

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
  {path:'new-user', component:NewUserComponent},
  {path:'str-dir', component:BuiltInStrDirComponent},
  {path:'attr-dir', component:BuiltInAttrDirComponent},
  {path:'directives', component:DirectiveHostComponent},
  {path:'**',redirectTo:'/home', pathMatch:'full'}
]

@NgModule({
  providers:[AuthGuard, ConfirmationGuard, UserService],
  imports: [ RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
