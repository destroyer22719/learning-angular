import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/service/user/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<IUser>
  constructor(private userService: UserService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers()
    // this.activatedRoute.data.forEach(data => {
    //   this.users = data.users
    // })
  }

}
