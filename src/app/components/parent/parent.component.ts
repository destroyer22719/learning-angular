import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';
import { IUser } from 'src/app/interfaces/user';
import {Laptop} from '../../classes/laptop';
import {HookLogger} from '../../decorators/class.decorator'
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
@HookLogger({
  hooks:['ngOnInit']
})
export class ParentComponent implements OnInit {
  dateToday:Date;
  users:IUser[];
  filterIdType:string = '';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.dateToday = new Date();
    this.users = this.userService.getUsers();
    let laptop:Laptop = new Laptop;
    console.log(laptop['stickers'])
  }
  addUser(){
    this.userService.addUser({
      id:this.users.length + 2,
      name:'Jane Moore',
      email:'janemoore@gmail.com'
    })
  }

}
