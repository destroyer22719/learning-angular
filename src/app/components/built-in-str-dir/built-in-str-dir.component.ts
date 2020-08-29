import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-str-dir',
  templateUrl: './built-in-str-dir.component.html',
  styleUrls: ['./built-in-str-dir.component.css']
})
export class BuiltInStrDirComponent implements OnInit {
  messages:string[];
  showList = true;
  constructor() { }
  alertType:string;
  ngOnInit(): void {
    this.messages = [
      'Message 1',
      'Message 2',
      'Message 3',

    ]
  }

}
