import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormArray,Validators,  } from '@angular/forms';
import {CustomValidation} from '../../classes/custom.validations'
@Component({
  selector: 'app-new-user-reactive',
  templateUrl: './new-user-reactive.component.html',
  styleUrls: ['./new-user-reactive.component.css']
})
export class NewUserReactiveComponent implements OnInit {
  userForm:FormGroup
  get name(){
    return this.userForm.get('name')
  }
  get username(){
    return this.userForm.get('username')
  }
  submit(){}
  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      name:new FormControl('John Doe',[ 
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('John Doe')
      ]),
      username:new FormControl('johndoe', CustomValidation.unique),
      email:new FormControl('john.doe@example.com'),
      phone:new FormControl('1234567890'),
      website:new FormControl('john.com'),
      address:new FormGroup({
        street:new FormControl('123 Street St.'),
        suite:new FormControl('Suite 123'),
        city:new FormControl('City'),
        zipcode:new FormControl('123456'),
        geo:new FormGroup({
          lat:new FormControl('123.12314'),
          lng:new FormControl('123.123213'),
        }),
      }),
      company:new FormGroup({
        name:new FormControl('My Company'),
        catchPhrase:new FormControl('my catchphrase'),
        bs:new FormControl('What the heck is a bs anyways?'),
      }),
      hobbies:new FormArray([])
    })
  }

  addHobby(){
    (<FormArray>this.userForm.get('hobbies')).push(new FormControl(''))
  }
  getArrayControls() {
    return (this.userForm.get('hobbies') as FormArray).controls;
  }
  deleteHobby(i){
    (<FormArray>this.userForm.get('hobbies')).removeAt(i)
  }
  resetForm(){
    this.userForm.reset();
  }
}
