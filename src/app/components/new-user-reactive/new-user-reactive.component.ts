import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray,Validators } from '@angular/forms';

@Component({
  selector: 'app-new-user-reactive',
  templateUrl: './new-user-reactive.component.html',
  styleUrls: ['./new-user-reactive.component.css']
})
export class NewUserReactiveComponent implements OnInit {
  userForm:FormGroup
  
  submit(){}
  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name:new FormControl(''),
      username:new FormControl(''),
      email:new FormControl(''),
      phone:new FormControl(''),
      website:new FormControl(''),
      address:new FormControl({
        street:new FormControl(''),
        suite:new FormControl(''),
        city:new FormControl(''),
        zipcode:new FormControl(''),
        geo:new FormControl({
          lat:new FormControl(''),
          lng:new FormControl(''),
        }),
      }),
      company:new FormControl({
        name:new FormControl(''),
        catchPhrase:new FormControl(''),
        bs:new FormControl(''),
      }),
    })
  }

}
