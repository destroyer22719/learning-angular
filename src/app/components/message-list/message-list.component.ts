import { Component, OnInit } from '@angular/core';
import {CanComponentDeactivate} from '../../gaurds/confirmation/confirmation.guard'

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements CanComponentDeactivate {
  constructor() { }

  confirm(){
    return confirm('Are you sure want to leave?')
  }
}
