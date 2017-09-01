import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';
@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {
  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }
}
