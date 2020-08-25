import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser} from '../../interfaces/user'
import { UserService} from '../../service/user/user.service'


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user:any;
  users:Array<IUser>

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {

    this.users = this.userService.getUsers() 
    this.activatedRoute.params.subscribe((params)=>{
      // this.user = this.userService.getUserById(+params['id'])
      this.userService.getUserByIdByREST(+params[`id`]).subscribe(
        user => this.user = user
      )
    });
  }
}
