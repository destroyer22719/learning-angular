import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  prop:string;
  subscription: Subscription;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.subscription = this.userService.propChanged.subscribe(
      prop => this.prop = prop,
      err => console.log('got an error: ', err),
      () => console.log('completed')
    );
  }
  changeProp(){
    this.userService.setProp('bar')
  }
  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
