import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  communicationMods:string[];
  genders: string[];


  constructor() { }

  ngOnInit(): void {
    this.genders=['Male','Female','Other'];
    this.communicationMods = ['Phone','Email']
  }
  submit(userForm){
    console.log("form submitted", userForm)
  }

}
