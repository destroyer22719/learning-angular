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
  // users:Array<IUser>

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe((res) => { this.user = res.hello})
  //   this.activatedRoute.params.subscribe((params)=>{
  //     this.userService.getUserByIdByREST(+params[`id`]).subscribe(
  //       user => this.user = user,
  //       err => console.log('Got an error while fetching the user deails: ', err ),
  //       () => console.log('Fetch of user details completed! ')
  //     )
  //   });
  }
  createUser(){
    this.user.id = null; 
    this.userService.createUser(this.user).subscribe(
      user => console.log('a new user was created with an id: ', user.id),
      err => console.log(`got an error as ${err}`),
      () => console.log('Creation of a user completed!')
    )
  }
  updateUser(){
    this.user.name = 'Nathan Cai';
    this.user.email = 'nathancai1031@gmail.com' 
    this.userService.updateUser(this.user).subscribe(
      user => console.log('a new user was updated'),
      err => console.log(`got an error as ${err}`),
      () => console.log('Creation of a user completed!')
    )
  }
  
  deleteUser(){
    this.user.name = 'Nathan Cai';
    this.user.email = 'nathancai1031@gmail.com' 
    this.userService.deleteUser(this.user).subscribe(
      user => console.log('a new user was deleted'),
      err => console.log(`got an error as ${err}`),
      () => console.log('Deletion of a user completed!')
    )
  }
  getUserPosts(){}
}
